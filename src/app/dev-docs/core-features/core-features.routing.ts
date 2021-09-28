import { Route } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { CardComponent } from './components/card/card.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { MasonryComponent } from './components/masonry/masonry.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CoreFeaturesComponent } from './core-features.component';
import { AutogrowComponent } from './directives/autogrow/autogrow.component';
import { ScrollResetComponent } from './directives/scroll-reset/scroll-reset.component';
import { ScrollbarComponent } from './directives/scrollbar/scrollbar.component';
import { MockApiComponent } from './libraries/mock-api/mock-api.component';
import { FindByKeyComponent } from './pipes/find-by-key/find-by-key.component';
import { ConfigComponent } from './services/config/config.component';
import { MediaWatcherComponent } from './services/media-watcher/media-watcher.component';
import { SplashScreenComponent } from './services/splash-screen/splash-screen.component';
import { MustMatchComponent } from './validators/must-match/must-match.component';


export const coreFeaturesRoutes: Route[] = [
    {
        path     : '',
        component: CoreFeaturesComponent,
        children : [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'libraries/mock-api'
            },
            {
                path    : 'libraries',
                children: [
                    {
                        path     : 'mock-api',
                        component: MockApiComponent
                    }
                ]
            },
            {
                path    : 'components',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'alert'
                    },
                    {
                        path     : 'alert',
                        component: AlertComponent
                    },
                    {
                        path     : 'card',
                        component: CardComponent
                    },
                    {
                        path     : 'date-range',
                        component: DateRangeComponent
                    },
                    {
                        path     : 'drawer',
                        component: DrawerComponent
                    },
                    {
                        path     : 'highlight',
                        component: HighlightComponent
                    },
                    {
                        path     : 'masonry',
                        component: MasonryComponent
                    },
                    {
                        path     : 'navigation',
                        component: NavigationComponent
                    }
                ]
            },
            {
                path    : 'directives',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'autogrow'
                    },
                    {
                        path     : 'autogrow',
                        component: AutogrowComponent
                    },
                    {
                        path     : 'scrollbar',
                        component: ScrollbarComponent
                    },
                    {
                        path     : 'scroll-reset',
                        component: ScrollResetComponent
                    }
                ]
            },
            {
                path    : 'services',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'config'
                    },
                    {
                        path     : 'config',
                        component: ConfigComponent
                    },
                    {
                        path     : 'splash-screen',
                        component: SplashScreenComponent
                    },
                    {
                        path     : 'media-watcher',
                        component: MediaWatcherComponent
                    }
                ]
            },
            {
                path    : 'pipes',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'find-by-key'
                    },
                    {
                        path     : 'find-by-key',
                        component: FindByKeyComponent
                    }
                ]
            },
            {
                path    : 'validators',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'must-match'
                    },
                    {
                        path     : 'must-match',
                        component: MustMatchComponent
                    }
                ]
            }
        ]
    }
];
