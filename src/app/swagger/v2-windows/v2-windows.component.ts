import { Component, OnInit } from '@angular/core';
import SwaggerUIBundle from 'swagger-ui';

@Component({
  selector: 'app-v2-windows',
  templateUrl: './v2-windows.component.html',
  styleUrls: ['./v2-windows.component.scss']
})
export class V2WindowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const DisableAuthorizePlugin = () => ({
            wrapComponents: {
                authorizeBtn: () => () => null
            }
        });
    const ui = SwaggerUIBundle({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        dom_id: '#swagger-ui-v2-windows',
        layout: 'BaseLayout',
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIBundle.SwaggerUIStandalonePreset
        ],
        plugins: DisableAuthorizePlugin,
        url: 'https://orgchart-api.ssa.gov/swagger/v2-windows/swagger.json',
        operationsSorter: 'alpha'
    });
}

}
