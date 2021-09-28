import { ChangelogComponent } from './changelog';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { changelogRoutes } from './changelog.routing';


@NgModule({
    declarations: [
        ChangelogComponent
    ],
    imports     : [
        RouterModule.forChild(changelogRoutes),
        SharedModule
    ]
})
export class ChangelogModule
{
}
