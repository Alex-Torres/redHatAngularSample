import { ConfigService } from './config.service';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { MsalService } from '@azure/msal-angular';
import { Injectable } from '@angular/core';
import { User } from '@microsoft/microsoft-graph-types';
import { HttpClient } from '@angular/common/http';
import { Client, ResponseType } from '@microsoft/microsoft-graph-client';
import { map, tap } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    private _oid: BehaviorSubject<string | null> = new BehaviorSubject(null);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    public authenticated: boolean = false;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    public user?: User;

    /**
     * Constructor
     */
    constructor(
        private sanitizer: DomSanitizer,
        private _httpClient: HttpClient,
        private _msalService: MsalService,
        private _configService: ConfigService
    ) {
        this.authenticated = this._msalService.instance
            .getAllAccounts().length > 0;
    }

    get oid$(): Observable<string> {
        return this._oid.asObservable();
    }


    // Sign out
    async signOut(): Promise<void> {
        await this._msalService.logout().toPromise();
        this.user = undefined;
        this.authenticated = false;
    }

    // Silently request an access token
    async getAccessToken(): Promise<string> {
        const account = this._msalService.instance.getAllAccounts()[0];
        const result = await this._msalService
            .acquireTokenSilent({
                account: account ?? undefined,
                scopes: ['user.read']
            })
            .toPromise()
            .catch((reason) => {
                // this.alertsService.addError('Get token failed', JSON.stringify(reason, null, 2));
                console.log(reason);
            });

        if (result) {
            return result.accessToken;
        }

        // Couldn't get a token
        this.authenticated = false;
        return '';
    }

    // <GetUserSnippet>
    private async getUser(): Promise<User | undefined> {

        if (!this.authenticated) {

            return undefined;
        }
        const graphClient = Client.init({
            // Initialize the Graph client with an auth
            // provider that requests the token from the
            // auth service
            authProvider: async (done) => {
                const token = await this.getAccessToken()
                    .catch((reason) => {
                        done(reason, null);
                    });

                if (token) {
                    done(null, token);
                } else {
                    done('Could not get an access token', null);
                }
            }
        });

        // Get the user from Graph (GET /me)
        const graphUser: MicrosoftGraph.User = await graphClient
            .api('/me')
            .select('displayName,mail,mailboxSettings,userPrincipalName')
            .get();

        let user: User;
        user.displayName = graphUser.displayName ?? '';
        // Prefer the mail property, but fall back to userPrincipalName
        user.mail = graphUser.mail ?? graphUser.userPrincipalName ?? '';



        return user;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    getProfile(): Observable<any> {
        return this._httpClient.get('https://graph.microsoft.com/v1.0/me')
            .pipe(
                tap((profile) => {
                    this._oid.next(profile.id);
                    return profile;
                })
            );
    }



    // eslint-disable-next-line @typescript-eslint/member-ordering
    getImage(): Observable<SafeResourceUrl> {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        return this._httpClient.get('https://graph.microsoft.com/v1.0/me/photos/96x96/$value', { responseType: ResponseType.ARRAYBUFFER, headers: { 'Content-Type': 'image/*' } })
            .pipe(
                map((x: ArrayBuffer) => {
                    const TYPED_ARRAY = new Uint8Array(x);
                    const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
                    const base64String = btoa(STRING_CHAR);

                    return this.sanitizer.bypassSecurityTrustUrl(
                        'data:image/*;base64, ' + base64String
                    );
                }),
            );



    }
}
