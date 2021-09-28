import {
    ChangeDetectionStrategy, Component,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent {
    /**
     * Constructor
     */
    constructor() {
    }
}
