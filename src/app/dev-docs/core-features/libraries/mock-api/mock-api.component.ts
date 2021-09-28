import { Component } from '@angular/core';
import { CoreFeaturesComponent } from '../../core-features.component';


@Component({
    selector   : 'mock-api',
    templateUrl: './mock-api.component.html',
    styles     : ['']
})
export class MockApiComponent
{
    /**
     * Constructor
     */
    constructor(private _coreFeaturesComponent: CoreFeaturesComponent)
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
        this._coreFeaturesComponent.matDrawer.toggle();
    }
}
