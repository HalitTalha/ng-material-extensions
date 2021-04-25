import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CdkTableExporterModule, XLSX_LIGHTWEIGHT } from 'cdk-table-exporter';
import { MatTableExporterDirective } from './mat-table-exporter.directive';
export class MatTableExporterModule {
    static forRoot(configuration) {
        return {
            ngModule: MatTableExporterModule,
            providers: [
                {
                    provide: XLSX_LIGHTWEIGHT,
                    useValue: configuration.xlsxLightWeight
                }
            ]
        };
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWV4cG9ydGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9hbmd1bGFyX3dvcmtzcGFjZS9uZy1tYXRlcmlhbC1leHRlbnNpb25zL3Byb2plY3RzL21hdC10YWJsZS1leHBvcnRlci9zcmMvIiwic291cmNlcyI6WyJsaWIvbWF0LXRhYmxlLWV4cG9ydGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFlM0UsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWtDO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsYUFBYSxDQUFDLGVBQWU7aUJBQ3hDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBcEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDekMsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2Qsc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBDZGtUYWJsZUV4cG9ydGVyTW9kdWxlLCBYTFNYX0xJR0hUV0VJR0hUIH0gZnJvbSAnY2RrLXRhYmxlLWV4cG9ydGVyJztcclxuaW1wb3J0IHsgTWF0VGFibGVFeHBvcnRlckRpcmVjdGl2ZSB9IGZyb20gJy4vbWF0LXRhYmxlLWV4cG9ydGVyLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vZHVsZUNvbmZpZ3VyYXRpb24ge1xyXG4gIHhsc3hMaWdodFdlaWdodD86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbTWF0VGFibGVFeHBvcnRlckRpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBDZGtUYWJsZUV4cG9ydGVyTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbTWF0VGFibGVFeHBvcnRlckRpcmVjdGl2ZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRUYWJsZUV4cG9ydGVyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWd1cmF0aW9uOiBNb2R1bGVDb25maWd1cmF0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXRUYWJsZUV4cG9ydGVyTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTWF0VGFibGVFeHBvcnRlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogWExTWF9MSUdIVFdFSUdIVCxcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWd1cmF0aW9uLnhsc3hMaWdodFdlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19