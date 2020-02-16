import { Injector } from '@angular/core';
import { Options } from '../options';
import { ExportType } from './../export-type';
import { Exporter } from './exporters/exporter';
export declare class ServiceLocatorService {
    private injector;
    constructor(injector: Injector);
    getService(exportType: ExportType | 'xls' | 'xlsx' | 'csv' | 'txt' | 'json' | 'other'): Exporter<Options>;
}
