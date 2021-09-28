import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { JwtComponent } from './authentication/jwt/jwt';
import { ComponentThemingComponent } from './customization/component-theming/component-theming';
import { PageLayoutsComponent } from './customization/page-layouts/page-layouts';
import { SplashScreenCustomizationComponent } from './customization/splash-screen/splash-screen';
import { TailwindCSSComponent } from './customization/tailwindcss/tailwindcss';
import { ThemeLayoutsComponent } from './customization/theme-layouts/theme-layouts';
import { ThemingComponent } from './customization/theming/theming';
import { ComponentStructureComponent } from './development/component-structure/component-structure';
import { DeploymentComponent } from './development/deployment/deployment';
import { DirectoryStructureComponent } from './development/directory-structure/directory-structure';
import { StarterKitComponent } from './development/starter-kit/starter-kit';
import { UpdatingComponent } from './development/updating/updating';
import { InstallationComponent } from './getting-started/installation/installation';
import { IntroductionComponent } from './getting-started/introduction/introduction';
import { PrerequisitesComponent } from './getting-started/prerequisites/prerequisites';
import { ServingComponent } from './getting-started/serving/serving';
import { GuidesComponent } from './guides.component';
import { guidesRoutes } from './guides.routing';


@NgModule({
    declarations: [
        GuidesComponent,
        IntroductionComponent,
        PrerequisitesComponent,
        InstallationComponent,
        ServingComponent,
        DirectoryStructureComponent,
        ComponentStructureComponent,
        StarterKitComponent,
        DeploymentComponent,
        UpdatingComponent,
        ThemeLayoutsComponent,
        PageLayoutsComponent,
        TailwindCSSComponent,
        ThemingComponent,
        ComponentThemingComponent,
        SplashScreenCustomizationComponent,
        JwtComponent
    ],
    imports     : [
        RouterModule.forChild(guidesRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTreeModule,
        FuseHighlightModule,
        FuseAlertModule,
        FuseNavigationModule,
        FuseScrollResetModule,
        SharedModule
    ]
})
export class GuidesModule
{
}
