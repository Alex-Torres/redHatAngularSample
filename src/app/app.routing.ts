import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { MsalGuard } from '@azure/msal-angular';
import { ProfileResolver } from './profile/profile.resolvers';


export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'swagger', pathMatch: 'full', redirectTo: 'swagger/v2' },





    // Admin routes
    {
        path: '',
        canActivate: [MsalGuard],
        canActivateChild: [MsalGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            { path: 'home', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule) },
            { path: 'help-center', loadChildren: () => import('app/help-center/help-center.module').then(m => m.HelpCenterModule) },
            {
                path: 'swagger', children: [
                    { path: 'v1', loadChildren: () => import('app/swagger/swagger.module').then(m => m.SwaggerModule) },
                    { path: 'v2', loadChildren: () => import('app/swagger/v2/v2.module').then(m => m.V2Module) },
                    { path: 'v3', loadChildren: () => import('app/swagger/v3/v3.module').then(m => m.V3Module) },
                    { path: 'v2-windows', loadChildren: () => import('app/swagger/v2-windows/v2-windows.module').then(m => m.V2WindowsModule) },

                ]
            },
            { path: 'profile', loadChildren: () => import('../app/profile/profile.module').then(m => m.ProfileModule) },
            { path: 'profile/settings', loadChildren: () => import('../app/settings/settings.module').then(m => m.SettingsModule) },
            { path: 'offices', loadChildren: () => import('app/offices/offices.module').then(m => m.OfficesModule) },
            { path: 'people', loadChildren: () => import('app/people/people.module').then(m => m.PeopleModule) },
            {
                path: 'error', children: [
                    { path: '404', loadChildren: () => import('app/error/error-404/error-404.module').then(m => m.Error404Module) },
                    { path: '500', loadChildren: () => import('app/error/error-500/error-500.module').then(m => m.Error500Module) }
                ]
            },

            // Documentation
            {
                path: 'dev', children: [

                    // Changelog
                    { path: 'changelog', loadChildren: () => import('app/dev-docs/changelog/changelog.module').then(m => m.ChangelogModule) },

                    // Guides
                    { path: 'guides', loadChildren: () => import('app/dev-docs/guides/guides.module').then(m => m.GuidesModule) }
                ]
            },
        ]
    },


    // 404 & Catch all
    { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/error/error-404/error-404.module').then(m => m.Error404Module) },
    { path: '**', redirectTo: '404-not-found' }
];
