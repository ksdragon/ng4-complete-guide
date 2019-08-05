import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.derective';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.derective';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
    LoadingSpinnerComponent,
    CommonModule
  ]
})
export class SharedModule {}
