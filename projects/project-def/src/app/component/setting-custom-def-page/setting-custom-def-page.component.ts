import { Component } from '@angular/core';
import { SettingPageComponent } from 'projects/ghi-library/src/lib/component/setting-page/setting-page.component';

@Component({
  selector: 'app-setting-custom-abc-page',
  templateUrl: './setting-custom-def-page.component.html',
  styleUrls: ['./setting-custom-def-page.component.scss']
})
export class SettingCustomDefPageComponent extends SettingPageComponent {

  override title = 'Setting Page ProjectDEF';

  constructor() {
    super();
  }

}
