import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'offices',
    templateUrl    : './offices.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficesComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
