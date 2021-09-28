import SwaggerUI from 'swagger-ui';
import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-v1',
    templateUrl: './v1.component.html',
    styleUrls: ['./v1.component.scss']
})
export class V1Component implements OnInit {

    constructor() { }

    ngOnInit(): void {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const DisableAuthorizePlugin = () => ({
            wrapComponents: {
                authorizeBtn: () => () => null
            }
        });

        SwaggerUI({
            domNode: document.getElementById('swagger-ui'),
            url : 'https://orgchart-api.ssa.gov/swagger/v1/swagger.json',
            plugins: DisableAuthorizePlugin,

        });
        // const ui = new SwaggerUIBundle({
        //     // eslint-disable-next-line @typescript-eslint/naming-convention
        //     dom_id: '#swagger-ui',
        //     layout: 'BaseLayout',
        //     // presets: [
        //     //     SwaggerUIBundle.presets.apis,
        //     //     SwaggerUIBundle.SwaggerUIStandalonePreset
        //     // ],
        //     plugins: DisableAuthorizePlugin,
        //     url: 'https://orgchart-api.ssa.gov/swagger/v1/swagger.json',
        //     operationsSorter: 'alpha'
        // });
    }

}
