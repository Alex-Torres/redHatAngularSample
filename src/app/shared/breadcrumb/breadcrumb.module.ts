import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from './breadcrumb.component';
import { MdePopoverModule } from '@material-extended/mde';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    declarations: [BreadcrumbComponent],
    exports: [BreadcrumbComponent, MdePopoverModule],
    imports: [
        CommonModule,
        MatIconModule,
        MdePopoverModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        
    ]
})
export class BreadcrumbModule { }
