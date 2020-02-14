import { Injector } from '@angular/core';
import { Options } from '../options';
import { ExportType } from './../export-type';
import { Exporter } from './exporters/exporter';
import * as i0 from "@angular/core";
export declare class ServiceLocatorService {
    private injector;
    constructor(injector: Injector);
    getService(exportType: ExportType | 'xls' | 'xlsx' | 'csv' | 'txt' | 'json' | 'other'): Exporter<Options>;
    static ɵfac: i0.ɵɵFactoryDef<ServiceLocatorService>;
    static ɵprov: i0.ɵɵInjectableDef<ServiceLocatorService>;
}
