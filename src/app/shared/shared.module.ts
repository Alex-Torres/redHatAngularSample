import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdePopoverModule } from '@material-extended/mde';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class SharedModule {
}
