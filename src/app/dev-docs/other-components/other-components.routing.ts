import { Route } from '@angular/router';
import { MessagesComponent } from 'app/layout/common/messages/messages.component';
import { NotificationsComponent } from 'app/layout/common/notifications/notifications.component';
import { SearchComponent } from 'app/layout/common/search/search.component';
import { ShortcutsComponent } from 'app/layout/common/shortcuts/shortcuts.component';
import { UserMenuComponent } from 'app/layout/common/user-menu/user-menu.component';
import { OverviewComponent } from './common/overview/overview.component';
import { OtherComponentsComponent } from './other-components.component';
import { ApexChartsComponent } from './third-party/apex-charts/apex-charts.component';
import { FullCalendarComponent } from './third-party/full-calendar/full-calendar.component';
import { NgxMarkdownComponent } from './third-party/ngx-markdown/ngx-markdown.component';
import { QuillEditorComponent } from './third-party/quill-editor/quill-editor.component';


export const otherComponentsRoutes: Route[] = [
    {
        path     : '',
        component: OtherComponentsComponent,
        children : [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: 'common/overview'
            },
            {
                path    : 'common',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'overview'
                    },
                    {
                        path     : 'overview',
                        component: OverviewComponent
                    },
                    {
                        path     : 'messages',
                        component: MessagesComponent
                    },
                    {
                        path     : 'notifications',
                        component: NotificationsComponent
                    },
                    {
                        path     : 'search',
                        component: SearchComponent
                    },
                    {
                        path     : 'shortcuts',
                        component: ShortcutsComponent
                    },
                    {
                        path     : 'user',
                        component: UserMenuComponent
                    }
                ]
            },
            {
                path    : 'third-party',
                children: [
                    {
                        path      : '',
                        pathMatch : 'full',
                        redirectTo: 'apex-charts'
                    },
                    {
                        path     : 'apex-charts',
                        component: ApexChartsComponent
                    },
                    {
                        path     : 'full-calendar',
                        component: FullCalendarComponent
                    },
                    {
                        path     : 'ngx-markdown',
                        component: NgxMarkdownComponent
                    },
                    {
                        path     : 'quill-editor',
                        component: QuillEditorComponent
                    }
                ]
            }
        ]
    }
];
