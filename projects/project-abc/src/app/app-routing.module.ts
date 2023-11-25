import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'projects/ghi-library/src/lib/component/home-page/home-page.component';
import { SettingPageComponent } from 'projects/ghi-library/src/lib/component/setting-page/setting-page.component';
import { SettingCustomAbcPageComponent } from './component/setting-custom-abc-page/setting-custom-abc-page.component';
import { DetailPageComponent } from 'projects/ghi-library/src/lib/component/detail-page/detail-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'setting', component: SettingPageComponent },
  { path: 'setting_custom', component: SettingCustomAbcPageComponent },
  { path: 'detail', component: DetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
