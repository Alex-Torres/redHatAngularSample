import { Component } from '@angular/core';
import { GuidesComponent } from '../../guides.component';


@Component({
    selector   : 'tailwindcss',
    templateUrl: './tailwindcss.html',
    styles     : ['']
})
export class TailwindCSSComponent
{
    /**
     * Constructor
     */
    constructor(private _guidesComponent: GuidesComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._guidesComponent.matDrawer.toggle();
    }
}
