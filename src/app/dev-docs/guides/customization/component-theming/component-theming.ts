import { Component } from '@angular/core';
import { GuidesComponent } from '../../guides.component';


@Component({
    selector: 'component-theming',
    templateUrl: './component-theming.html',
    styles: ['']
})
export class ComponentThemingComponent {
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
