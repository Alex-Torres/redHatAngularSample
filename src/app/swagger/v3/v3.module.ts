import { V3Component } from './v3.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V3RoutingModule } from './v3-routing.module';
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


@NgModule({
  declarations: [
      V3Component
  ],
  imports: [
    CommonModule,
    V3RoutingModule,
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
export class V3Module { }
