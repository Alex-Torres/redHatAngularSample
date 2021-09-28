import { Component } from '@angular/core';
import { CoreFeaturesComponent } from '../../core-features.component';


@Component({
    selector   : 'splash-screen',
    templateUrl: './splash-screen.component.html',
    styles     : ['']
})
export class SplashScreenComponent
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
