import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [],
  imports: [ComponentsModule, PipeModule],
  exports: [ComponentsModule, PipeModule]
})
export class CommonModule {
}
