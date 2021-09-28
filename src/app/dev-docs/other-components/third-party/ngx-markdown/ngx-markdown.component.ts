import { Component } from '@angular/core';
import { OtherComponentsComponent } from '../../other-components.component';


@Component({
    selector   : 'ngx-markdown',
    templateUrl: './ngx-markdown.component.html',
    styles     : ['']
})
export class NgxMarkdownComponent
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
