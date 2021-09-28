import { Course } from './offices.types';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OfficesService } from './offices.service';
import { Category } from './offices.types';


@Injectable({
    providedIn: 'root'
})
export class OfficesCategoriesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _officesService: OfficesService)
    {
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category[]>
    {
        return this._officesService.getCategories();
    }
}

@Injectable({
    providedIn: 'root'
})
export class OfficesCoursesResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _officesService: OfficesService)
    {
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]>
    {
        return this._officesService.getCourses();
    }
}

@Injectable({
    providedIn: 'root'
})
export class OfficesCourseResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _router: Router,
        private _officesService: OfficesService
    )
    {
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
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course>
    {
        return this._officesService.getCourseById(route.paramMap.get('id'))
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
