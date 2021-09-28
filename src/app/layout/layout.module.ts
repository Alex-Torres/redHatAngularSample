import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { LayoutComponent } from 'app/layout/layout.component';
import { SharedModule } from 'app/shared/shared.module';
import { ClassyLayoutModule } from './layouts/vertical/classy/classy.module';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        MatIconModule,
        MatTooltipModule,
        FuseDrawerModule,
        SharedModule,
        ClassyLayoutModule
    ],
    exports     : [
        LayoutComponent,
        ClassyLayoutModule
    ]
})
export class LayoutModule
{
}
