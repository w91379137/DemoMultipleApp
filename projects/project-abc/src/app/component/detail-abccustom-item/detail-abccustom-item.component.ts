import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'projects/ghi-library/src/lib/component/detail-item/detail-item.component';

@Component({
  selector: 'app-detail-abccustom-item',
  templateUrl: './detail-abccustom-item.component.html',
  styleUrls: ['./detail-abccustom-item.component.scss']
})
export class DetailABCCustomItemComponent implements OnInit {

  constructor(
    public detail: Detail
  ) { }

  ngOnInit(): void {
  }

}
