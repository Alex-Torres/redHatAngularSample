import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'app/shared/shared.module';
import { SignOutModernComponent } from './sign-out.component';


const routes: Routes = [
  {
    path: 'sign-out',
    component: SignOutModernComponent

  }
];

@NgModule({
  declarations: [SignOutModernComponent],
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ]
})
export class AuthSignOutModule {
}
