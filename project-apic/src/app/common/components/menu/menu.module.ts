import { NgModule } from '@angular/core';
import { DefaultModule } from '../../../core/module/default/default.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavBarComponent, SearchComponent, FooterComponent],
  imports: [
    DefaultModule,
    RouterLink,
    FormsModule
  ],
    exports: [
        NavBarComponent,
        SearchComponent,
        FooterComponent
    ]
})
export class MenuModule {
}
