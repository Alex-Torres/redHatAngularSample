import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileResolver } from './profile.resolvers';
import { UpdateProfileFormComponent } from './update/update-profile-form.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    {
        path: '',
        component: ViewComponent,

    },
    {
        path: 'update',
        component: UpdateProfileFormComponent,
        resolve: { profile: ProfileResolver }

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
