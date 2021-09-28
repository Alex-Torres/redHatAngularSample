import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { takeUntil } from 'rxjs/operators';
import { CoreFeaturesComponent } from '../../core-features.component';

@Component({
    selector   : 'masonry',
    templateUrl: './masonry.component.html',
    styles     : ['']
})
export class MasonryComponent implements OnInit
{
    columns: number = 4;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _coreFeaturesComponent: CoreFeaturesComponent,
        private _fuseMediaWatcherService: FuseMediaWatcherService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {

                // Set the masonry columns
                //
                // This if block structured in a way so that only the
                // biggest matching alias will be used to set the column
                // count.
                if ( matchingAliases.includes('xl') )
                {
                    this.columns = 5;
                }
                else if ( matchingAliases.includes('lg') )
                {
                    this.columns = 4;
                }
                else if ( matchingAliases.includes('md') )
                {
                    this.columns = 3;
                }
                else if ( matchingAliases.includes('sm') )
                {
                    this.columns = 2;
                }
                else
                {
                    this.columns = 1;
                }
            });
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
