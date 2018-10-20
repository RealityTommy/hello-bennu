/**
 * NgModule that includes all Material modules that are required to serve the application
 */

import { NgModule } from '@angular/core';

// Import all material modules here
import {
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
} from '@angular/material';

// Array variable to use all material modules
const modules = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
];

@NgModule({
    // Import modules into this module
    imports: [...modules],
    // Allow other modules to use these modules
    exports: [...modules]
})
export class MaterialModule { }
