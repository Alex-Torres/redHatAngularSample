import { AuthService } from 'app/core/authentication/auth.service';
import { FuseSplashScreenService } from '../../@fuse/services/splash-screen/splash-screen.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from './profile.service';
import { Profile } from './profile';
import { map, switchMap, mergeMap, take } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ProfileResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _profileService: ProfileService, private _authService: AuthService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        if (state.url === '/profile/update') {
            return this._authService.oid$.pipe(
                take(1),
                mergeMap((oid: string) => this._profileService.getProfileById(oid).pipe(
                    take(1),
                    map(profileData => ({ ...profileData, oid }))))
            );
        }
    }
}


