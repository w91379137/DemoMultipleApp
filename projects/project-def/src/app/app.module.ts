import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhiLibraryModule } from 'projects/ghi-library/src/lib/ghi-library.module';
import { SettingCustomDefPageComponent } from './component/setting-custom-def-page/setting-custom-def-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingCustomDefPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GhiLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
