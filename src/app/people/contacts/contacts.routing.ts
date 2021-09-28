import { Route } from '@angular/router';
import { ContactsContactResolver, ContactsCountriesResolver,
     ContactsResolver, ContactsTagsResolver } from '../contacts/contacts.resolvers';
import { ContactsComponent } from './contacts.component';
import { CanDeactivateContactsDetails } from './contacts.guards';
import { ContactsDetailsComponent } from './details/details.component';
import { ContactsListComponent } from './list/list.component';


export const contactsRoutes: Route[] = [
    {
        path     : '',
        component: ContactsComponent,
        resolve  : {
            tags: ContactsTagsResolver
        },
        children : [
            {
                path     : '',
                component: ContactsListComponent,
                resolve  : {
                    tasks    : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : ContactsDetailsComponent,
                        resolve      : {
                            task     : ContactsContactResolver,
                            countries: ContactsCountriesResolver
                        },
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]
    }
];
