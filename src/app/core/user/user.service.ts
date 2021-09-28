import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../authentication/auth.service';
import { BatchResponseContent, Client, ResponseType } from '@microsoft/microsoft-graph-client';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private graphClient: Client;
    private token: string;

    /**
     * Constructor
     */
    constructor(private authService: AuthService, private _httpClient: HttpClient, private sanitizer: DomSanitizer) {

        this.graphClient = Client.init({
            authProvider: async (done) => {
                // Get the token from the auth service
                const token = await this.authService.getAccessToken();

                if (token) {
                    done(null, token);
                } else {
                    done('Could not get an access token', null);
                }
            }
        });
    }
  
}
