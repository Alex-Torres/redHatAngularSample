import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { SignInModernComponent } from './sign-in.component';



const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInModernComponent

  }
];

@NgModule({
  declarations: [SignInModernComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FuseAlertModule,
    SharedModule
  ]
})
export class AuthSignInModule {
}
