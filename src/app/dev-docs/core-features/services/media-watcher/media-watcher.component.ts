import { Component } from '@angular/core';
import { CoreFeaturesComponent } from '../../core-features.component';


@Component({
    selector   : 'media-watcher',
    templateUrl: './media-watcher.component.html',
    styles     : ['']
})
export class MediaWatcherComponent
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
