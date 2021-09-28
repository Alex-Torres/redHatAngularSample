import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { SettingsAccountComponent } from 'app/core/settings/account/account.component';
import { SettingsNotificationsComponent } from 'app/core/settings/notifications/notifications.component';
import { SettingsSecurityComponent } from 'app/core/settings/security/security.component';
import { SettingsComponent } from 'app/core/settings/settings.component';
import { settingsRoutes } from 'app/core/settings/settings.routing';
import { SettingsTeamComponent } from 'app/core/settings/team/team.component';
import { SettingsPlanBillingComponent } from './plan-billing/plan-billing.component';


@NgModule({
    declarations: [
        SettingsComponent,
        SettingsAccountComponent,
        SettingsSecurityComponent,
        SettingsPlanBillingComponent,
        SettingsNotificationsComponent,
        SettingsTeamComponent
    ],
    imports     : [
        RouterModule.forChild(settingsRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        FuseAlertModule,
        SharedModule
    ]
})
export class SettingsModule
{
}
