import { PeopleCategoriesResolver, PeopleCourseResolver, PeopleCoursesResolver } from './people.resolvers';
import { Route } from '@angular/router';
import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './list/list.component';
import { PeopleDetailsComponent } from './details/details.component';



export const peopleRoutes: Route[] = [
    {
        path: '',
        component: PeopleComponent,
        resolve: {
            categories: PeopleCategoriesResolver
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: PeopleListComponent,
                resolve: {
                    courses: PeopleCoursesResolver
                }
            },
            {
                path: ':id',
                component: PeopleDetailsComponent,
                resolve: {
                    course: PeopleCourseResolver
                }
            }
        ]
    }
];
