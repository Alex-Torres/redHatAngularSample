import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PeopleService } from './people.service';
import { Category, Course } from './people.types';


@Injectable({
    providedIn: 'root'
})
export class PeopleCategoriesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _peopleService: PeopleService) {
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]> {
        return this._peopleService.getCategories();
    }
}

@Injectable({
    providedIn: 'root'
})
export class PeopleCoursesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _peopleService: PeopleService) {
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]> {
        return this._peopleService.getCourses();
    }
}

@Injectable({
    providedIn: 'root'
})
export class PeopleCourseResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _peopleService: PeopleService
    ) {
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        return this._peopleService.getCourseById(route.paramMap.get('id'))
            .pipe(
                // Error here means the requested task is not available
                catchError((error) => {

                    // Log the error
                    console.error(error);

                    // Get the parent url
                    const parentUrl = state.url.split('/').slice(0, -1).join('/');

                    // Navigate to there
                    this._router.navigateByUrl(parentUrl);

                    // Throw an error
                    return throwError(error);
                })
            );
    }
}
