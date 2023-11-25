import { Component } from '@angular/core';
import { SettingPageComponent } from 'projects/ghi-library/src/lib/component/setting-page/setting-page.component';

@Component({
  selector: 'app-setting-custom-abc-page',
  templateUrl: './setting-custom-abc-page.component.html',
  styleUrls: ['./setting-custom-abc-page.component.scss']
})
export class SettingCustomAbcPageComponent extends SettingPageComponent {

  override title = 'Setting Page ProjectABC';

  constructor() {
    super();
  }

}
