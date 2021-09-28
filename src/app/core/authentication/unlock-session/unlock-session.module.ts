import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { UnlockSessionModernComponent } from './unlock-session.component';


const routes: Routes = [
  {
    path: 'unlock-session',
    component: UnlockSessionModernComponent

  }
];

@NgModule({
  declarations: [ UnlockSessionModernComponent ],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FuseAlertModule,
    SharedModule
  ]
})
export class AuthUnlockSessionModule {
}
