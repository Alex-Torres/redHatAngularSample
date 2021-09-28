import { Component } from '@angular/core';
import { GuidesComponent } from '../../guides.component';


@Component({
    selector: 'theme-layouts',
    templateUrl: './theme-layouts.html',
    styles: ['']
})
export class ThemeLayoutsComponent {
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
