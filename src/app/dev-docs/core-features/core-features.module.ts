import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { FuseCardModule } from '@fuse/components/card';
import { FuseDateRangeModule } from '@fuse/components/date-range';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseMasonryModule } from '@fuse/components/masonry/masonry.module';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { AlertComponent } from './components/alert/alert.component';
import { CardComponent } from './components/card/card.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { MasonryComponent } from './components/masonry/masonry.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CoreFeaturesComponent } from './core-features.component';
import { coreFeaturesRoutes } from './core-features.routing';
import { AutogrowComponent } from './directives/autogrow/autogrow.component';
import { ScrollResetComponent } from './directives/scroll-reset/scroll-reset.component';
import { ScrollbarComponent } from './directives/scrollbar/scrollbar.component';
import { MockApiComponent } from './libraries/mock-api/mock-api.component';
import { FindByKeyComponent } from './pipes/find-by-key/find-by-key.component';
import { ConfigComponent } from './services/config/config.component';
import { MediaWatcherComponent } from './services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from './services/splash-screen/splash-screen.component';
import { MustMatchComponent } from './validators/must-match/must-match.component';


@NgModule({
    declarations: [
        CoreFeaturesComponent,
        MockApiComponent,
        AlertComponent,
        CardComponent,
        DateRangeComponent,
        DrawerComponent,
        HighlightComponent,
        MasonryComponent,
        NavigationComponent,
        AutogrowComponent,
        ScrollbarComponent,
        ScrollResetComponent,
        ConfigComponent,
        SplashScreenComponent,
        MediaWatcherComponent,
        FindByKeyComponent,
        MustMatchComponent
    ],
    imports     : [
        RouterModule.forChild(coreFeaturesRoutes),
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        MatTreeModule,
        FuseAlertModule,
        FuseCardModule,
        FuseDateRangeModule,
        FuseDrawerModule,
        FuseHighlightModule,
        FuseMasonryModule,
        FuseNavigationModule,
        FuseScrollResetModule,
        SharedModule
    ]
})
export class CoreFeaturesModule
{
}
