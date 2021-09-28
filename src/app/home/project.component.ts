import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
    components: any[];

    /**
     * Constructor
     */
    constructor() {
        this.components = [
            {
                id: 'people',
                name: 'People',
                summary: 'There are 83,238 People in the directory.',
                exampleSpecs: {
                    prefix: 'autocomplete-'
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-autocomplete-testing.html'
                    }
                ]
            },
            {
                id: 'badge',
                name: 'Badge',
                summary: 'A small value indicator that can be overlaid on another object.',
                exampleSpecs: {
                    prefix: 'badge-'
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-badge-testing.html'
                    }
                ]
            },
            {
                id: 'bottom-sheet',
                name: 'Bottom Sheet',
                summary: 'A large interactive panel primarily for mobile devices.',
                exampleSpecs: {
                    prefix: 'bottom-sheet-'
                },
                additionalApiDocs: [
                    {
                        name: 'Testing',
                        path: 'material-bottom-sheet-testing.html'
                    }
                ]
            },

        ];
    }
}
