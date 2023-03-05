import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PipeModule } from './pipe/pipe.module';
import { DirectiveModule } from './directive/directive.module';

@NgModule({
  declarations: [],
  imports: [ComponentsModule, PipeModule, DirectiveModule],
  exports: [ComponentsModule, PipeModule, DirectiveModule]
})
export class CommonModule {
}
