import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2WindowsRoutingModule } from './v2-windows-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { V2WindowsComponent } from './v2-windows.component';


@NgModule({
  declarations: [
    V2WindowsComponent
  ],
  imports: [
    CommonModule,
    V2WindowsRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    NgApexchartsModule,
    SharedModule
  ]
})
export class V2WindowsModule { }
