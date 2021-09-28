import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwaggerRoutingModule } from './swagger-routing.module';
import { V1Component } from './v1/v1.component';
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
    V1Component,
  ],
  imports: [
    CommonModule,
    SwaggerRoutingModule,
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
export class SwaggerModule { }
