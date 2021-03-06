import { Component } from '@angular/core';
import { OtherComponentsComponent } from '../../other-components.component';


@Component({
    selector   : 'notifications',
    templateUrl: './notifications.component.html',
    styles     : ['']
})
export class NotificationsComponent
{
    /**
     * Constructor
     */
    constructor(private _otherComponentsComponent: OtherComponentsComponent)
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
        this._otherComponentsComponent.matDrawer.toggle();
    }
}
