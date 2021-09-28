import { FuseSplashScreenService } from '../../@fuse/services/splash-screen/splash-screen.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, tap, catchError } from 'rxjs/operators';
import { Profile } from './profile';



@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    // Private
    private _profile: BehaviorSubject<Profile | null> = new BehaviorSubject(null);


    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient, private _loadingScreen: FuseSplashScreenService) {
    }


    get profile$(): Observable<Profile> {
        return this._profile.asObservable();
    }


    /**
     * Get profile by id
     */
    getProfileById(id: string): Observable<Profile> {
        return this._httpClient.get<Profile>(`https://orgchart-api.ssa.gov/api/v2/preferences/${id}/id`)
            .pipe(
                tap((data: Profile) => {
                    data.prefersDarkMode = data.prefersDarkMode.toString();
                    this._profile.next(data);

                    return data;

                }),
                switchMap((profileData) => {

                    if (!profileData) {
                        return throwError('Could not found profile with id of ' + id + '!');
                    }

                    return of(profileData);
                }));
    }



    /**
     * Update Profile
     *
     * @param objectId
     * @param profile
     */
    updateProfile(objectId: string, profile: any): Observable<any> {
        return this._httpClient.put<any>(`https://orgchart-api.ssa.gov/api/v2/preferences/${objectId}`, profile).pipe(
            map((updatedProfile: any) => {
                // Update the contacts
                this._profile.next(updatedProfile);
                // Return the updated contact
                return updatedProfile;
            }),
            catchError((error: any) => {
                if (error.status >= 400) {
                    return of(error.error.errors);
                }
            }),
        );
    }
}
