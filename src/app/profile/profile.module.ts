import { BreadcrumbModule } from './../shared/breadcrumb/breadcrumb.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'app/shared/shared.module';
import { ProfileWizardsComponent } from './profile.component';
import { UpdateProfileFormComponent } from './update/update-profile-form.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [ProfileWizardsComponent, UpdateProfileFormComponent, ViewComponent],
  imports: [
    ProfileRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    BreadcrumbModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    SharedModule
  ]
})
export class ProfileModule { }
