import { Component } from '@angular/core';
import { GuidesComponent } from '../../guides.component';


@Component({
    selector: 'deployment',
    templateUrl: './deployment.html',
    styles: ['']
})
export class DeploymentComponent {
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
