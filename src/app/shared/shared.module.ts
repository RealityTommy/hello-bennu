/**
 * NgModule that includes all Shared modules that are required to serve the application
 */

import { NgModule } from '@angular/core';

// Imports material and flexlayout modules
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Array variable to use all material modules
const modules = [
    MaterialModule,
    FlexLayoutModule,
];

// Array variable to use all components
const declarations = [];

@NgModule({
    // Declare components
    declarations: [
        declarations
    ],
    // Import modules into this module
    imports: [modules],
    // Allow other modules to use these modules and components
    exports: [
        modules,
        declarations,
    ]
})
export class SharedModule { }
