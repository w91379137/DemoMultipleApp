import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'projects/ghi-library/src/lib/component/home-page/home-page.component';
import { SettingPageComponent } from 'projects/ghi-library/src/lib/component/setting-page/setting-page.component';
import { SettingCustomDefPageComponent } from './component/setting-custom-def-page/setting-custom-def-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'setting', component: SettingPageComponent },
  { path: 'setting_custom', component: SettingCustomDefPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
