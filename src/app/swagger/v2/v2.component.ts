/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import SwaggerUIBundle  from 'swagger-ui';

@Component({
    selector: 'app-v2',
    templateUrl: './v2.component.html',
    styleUrls: ['./v2.component.scss']
})
export class V2Component implements OnInit {

    constructor() { }


    ngOnInit(): void {
        const ui = SwaggerUIBundle({
            // eslint-disable-next-line @typescript-eslint/naming-convention
            dom_id: '#swagger-ui-v2',
            layout: 'BaseLayout',
            oauth2RedirectUrl: 'https://orgchart-api.ssa.gov/oc-spa/oauth2-redirect.html',
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIBundle.SwaggerUIStandalonePreset
            ],
            url: 'https://orgchart-api.ssa.gov/swagger/v2/swagger.json',
            operationsSorter: 'alpha'
        });
        ui.initOAuth({
            clientId: 'bba1a7b9-efe3-49a7-af08-711349bf5160',
            realm: 'https://socialsecurity.onmicrosoft.com',
            appName: 'OrgChart-Api',
            scopeSeparator: ' ',
            scopes: 'api://bba1a7b9-efe3-49a7-af08-711349bf5160/read.access',
            usePkceWithAuthorizationCodeGrant: true
        });


    }


}
