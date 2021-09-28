import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V1Component } from './v1/v1.component';
import { V2WindowsComponent } from './v2-windows/v2-windows.component';
import { V2Component } from './v2/v2.component';

const routes: Routes = [
    {
        path: '',
        component: V1Component
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SwaggerRoutingModule { }
