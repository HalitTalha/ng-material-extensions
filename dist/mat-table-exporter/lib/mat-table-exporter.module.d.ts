import { ModuleWithProviders } from '@angular/core';
export interface ModuleConfiguration {
    xlsxLightWeight?: boolean;
}
export declare class MatTableExporterModule {
    static forRoot(configuration: ModuleConfiguration): ModuleWithProviders<MatTableExporterModule>;
}
