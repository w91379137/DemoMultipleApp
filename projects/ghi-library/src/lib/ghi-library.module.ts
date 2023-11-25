import { NgModule } from '@angular/core';
import { GhiLibraryComponent } from './ghi-library.component';
import { HomePageComponent } from './component/home-page/home-page.component';

let components = [
  GhiLibraryComponent,
  HomePageComponent
]

@NgModule({
  declarations: components,
  imports: [
  ],
  exports: components
})
export class GhiLibraryModule { }
