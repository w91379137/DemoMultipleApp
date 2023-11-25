import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ghi-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.css']
})
export class SettingPageComponent implements OnInit {

  title = 'Setting Page'
  context = 'This is a setting page'

  constructor() { }

  ngOnInit(): void {
  }

}
