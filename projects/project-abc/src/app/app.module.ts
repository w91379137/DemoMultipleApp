import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhiLibraryModule } from 'projects/ghi-library/src/lib/ghi-library.module';
import { SettingCustomAbcPageComponent } from './component/setting-custom-abc-page/setting-custom-abc-page.component';
import { DetailABCCustomItemComponent } from './component/detail-abccustom-item/detail-abccustom-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SettingCustomAbcPageComponent,
    DetailABCCustomItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    GhiLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
