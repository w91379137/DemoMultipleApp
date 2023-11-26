import { Component, OnInit } from '@angular/core';
import { DetailItemComponent } from '../detail-item/detail-item.component';

@Component({
  selector: 'ghi-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {

  Item = DetailItemComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
