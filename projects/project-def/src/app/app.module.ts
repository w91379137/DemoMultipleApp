import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GhiLibraryModule } from 'projects/ghi-library/src/lib/ghi-library.module';
import { SettingPageComponent } from './component/setting-page/setting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingPageComponent
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
