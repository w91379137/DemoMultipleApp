import { Component, Injectable, Input, OnInit } from '@angular/core';

@Injectable()
export class Detail {
  text = 'default text';
}

@Component({
  selector: 'ghi-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  constructor(
    public detail: Detail
  ) { }

  ngOnInit(): void {
  }

}
