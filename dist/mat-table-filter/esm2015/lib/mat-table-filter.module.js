import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableFilterDirective } from './mat-table-filter.directive';
export class MatTableFilterModule {
}
MatTableFilterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MatTableFilterDirective],
                imports: [
                    MatTableModule
                ],
                exports: [MatTableFilterDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRhYmxlLWZpbHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiRDovYW5ndWxhcl93b3Jrc3BhY2UvbmctbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wcm9qZWN0cy9tYXQtdGFibGUtZmlsdGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9tYXQtdGFibGUtZmlsdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVN2RSxNQUFNLE9BQU8sb0JBQW9COzs7WUFQaEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxPQUFPLEVBQUU7b0JBQ1AsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vbWF0LXRhYmxlLWZpbHRlci5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZV0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgTWF0VGFibGVNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtNYXRUYWJsZUZpbHRlckRpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFRhYmxlRmlsdGVyTW9kdWxlIHsgfVxyXG4iXX0=