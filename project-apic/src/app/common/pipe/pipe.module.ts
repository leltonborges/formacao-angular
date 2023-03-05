import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByDescriptionPipe } from './filter-by-description/filter-by-description.pipe';

@NgModule({
  declarations: [
    FilterByDescriptionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [FilterByDescriptionPipe]
})
export class PipeModule {
}
