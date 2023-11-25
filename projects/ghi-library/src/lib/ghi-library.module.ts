import { NgModule } from '@angular/core';
import { GhiLibraryComponent } from './ghi-library.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HomeItemComponent } from './component/home-item/home-item.component';
import { SettingPageComponent } from './component/setting-page/setting-page.component';
import { SettingItemComponent } from './component/setting-item/setting-item.component';

let components = [
  GhiLibraryComponent,
  HomePageComponent,
  HomeItemComponent,
  SettingPageComponent,
  SettingItemComponent,
]

@NgModule({
  declarations: components,
  imports: [
  ],
  exports: components
})
export class GhiLibraryModule { }
