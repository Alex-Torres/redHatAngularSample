import { Route } from '@angular/router';
import { OfficesDetailsComponent } from './details/details.component';
import { OfficesListComponent } from './list/list.component';
import { OfficesComponent } from './offices.component';
import { OfficesCategoriesResolver, OfficesCoursesResolver, OfficesCourseResolver } from './offices.resolvers';


export const officesRoutes: Route[] = [
    {
        path     : '',
        component: OfficesComponent,
        resolve  : {
            categories: OfficesCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: OfficesListComponent,
                resolve  : {
                    courses: OfficesCoursesResolver
                }
            },
            {
                path     : ':id',
                component: OfficesDetailsComponent,
                resolve  : {
                    course: OfficesCourseResolver
                }
            }
        ]
    }
];
