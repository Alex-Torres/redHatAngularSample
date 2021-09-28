import { GuidesComponent } from './../../guides.component';
import { Component } from '@angular/core';


@Component({
    selector: 'splash-screen',
    templateUrl: './splash-screen.html',
    styles: ['']
})
export class SplashScreenCustomizationComponent {
    /**
     * Constructor
     */
    constructor(private _guidesComponent: GuidesComponent) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void {
        // Toggle the drawer
        this._guidesComponent.matDrawer.toggle();
    }
}
