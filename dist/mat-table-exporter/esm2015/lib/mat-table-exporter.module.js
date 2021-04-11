import { CdkTableExporterModule } from 'cdk-table-exporter';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatTableExporterDirective } from './mat-table-exporter.directive';
export class MatTableExporterModule {
}
MatTableExporterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MatTableExporterDirective],
                imports: [
                    MatTableModule,
                    CdkTableExporterModule
                ],
                exports: [MatTableExporterDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hbmd1bGFyX3dvcmtzcGFjZS9uZy1tYXRlcmlhbC1leHRlbnNpb25zL3Byb2plY3RzL21hdC10YWJsZS1leHBvcnRlci9zcmMvIiwic291cmNlcyI6WyJsaWIvbWF0LXRhYmxlLWV4cG9ydGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVczRSxNQUFNLE9BQU8sc0JBQXNCOzs7WUFSbEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrVGFibGVFeHBvcnRlck1vZHVsZSB9IGZyb20gJ2Nkay10YWJsZS1leHBvcnRlcic7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZUV4cG9ydGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9tYXQtdGFibGUtZXhwb3J0ZXIuZGlyZWN0aXZlJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW01hdFRhYmxlRXhwb3J0ZXJEaXJlY3RpdmVdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgQ2RrVGFibGVFeHBvcnRlck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW01hdFRhYmxlRXhwb3J0ZXJEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUV4cG9ydGVyTW9kdWxlIHsgfVxyXG4iXX0=