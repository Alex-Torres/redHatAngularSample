import { Component } from '@angular/core';
import { GuidesComponent } from '../../guides.component';


@Component({
    selector: 'page-layouts',
    templateUrl: './page-layouts.html',
    styles: ['']
})
export class PageLayoutsComponent {
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
