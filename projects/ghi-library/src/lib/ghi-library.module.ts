import { NgModule } from '@angular/core';
import { GhiLibraryComponent } from './ghi-library.component';
import { HomePageComponent } from './component/home-page/home-page.component';



@NgModule({
  declarations: [
    GhiLibraryComponent,
    HomePageComponent
  ],
  imports: [
  ],
  exports: [
    GhiLibraryComponent
  ]
})
export class GhiLibraryModule { }
