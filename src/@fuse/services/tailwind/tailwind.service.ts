import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { fromPairs, map } from 'lodash-es';
import * as extractedTailwindConfigStyle from '@fuse/styles/core/tailwind-config.scss';


@Injectable({
    providedIn: 'root'
})
export class FuseTailwindService {
    private _tailwindConfig: ReplaySubject<any> = new ReplaySubject<any>(1);

    /**
     * Constructor
     */
    constructor() {
        // Prepare the config object
        const config: any = {};

        // Extract the style from the class
        const regexpForClass = /\.fuse-tailwind-extracted-config\s\{([\s\S]*)\}/g;
        // eslint-disable-next-line max-len
        const style ='--breakpoints-print:\'print\'; --breakpoints-sm:\'(min-width: 600px)\'; --breakpoints-md:\'(min-width: 960px)\'; --breakpoints-lg:\'(min-width: 1280px)\'; --breakpoints-xl:\'(min-width: 1440px)\'; --themes-default:\'{\'primary\':\'#4f46e5\',accent\':\'#1e293b\',\'warn\':\'#dc2626\'}\'; --themes-brand:\'{\'primary\':\'#2196f3\',\'accent\':\'#1e293b\',\'warn\':\'#dc2626\'}\'; --themes-indigo:\'{\'primary\':\'#0d9488\',\'accent\':\'#1e293b\',\'warn\':\'#dc2626\'}\'; --themes-rose:\'{\'primary\':\'#f43f5e\',\'accent\':\'#1e293b\',\'warn\':\'#dc2626\'}\'; --themes-purple:\'{\'primary\':\'#9333ea\',\'accent\':\'#1e293b\',\'warn\':\'#dc2626\'}\'; --themes-amber:\'{\'primary\':\'#f59e0b\',\'accent\':\'#1e293b\',\'warn\':\'#dc2626\'}';
        // Extract the rules
        const regexp = /(--[\s\S]*?):'([\s\S]*?)';/g;
        let rules = regexp.exec(style);

        // Add to the config
        while (rules !== null) {
            const configGroup = /--([\s\S]*?)-/g.exec(rules[1])?.[1] ?? 0;
            if (!config[configGroup]) {
                config[configGroup] = {};
            }

            config[configGroup][rules[1].replace(/(--[\s\S]*?-)/g, '')] = rules[2];
            rules = regexp.exec(style);
        }

        // Parse the themes objects
        config.themes = Object.keys(config.themes);

        // Execute the observable with the config
        this._tailwindConfig.next(config);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for _tailwindConfig
     */
    get tailwindConfig$(): Observable<any> {
        return this._tailwindConfig.asObservable();
    }
}
