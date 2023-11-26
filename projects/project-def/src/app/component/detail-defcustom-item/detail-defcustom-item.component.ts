import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'projects/ghi-library/src/lib/component/detail-item/detail-item.component';

@Component({
  selector: 'app-detail-defcustom-item',
  templateUrl: './detail-defcustom-item.component.html',
  styleUrls: ['./detail-defcustom-item.component.scss']
})
export class DetailDEFCustomItemComponent implements OnInit {

  constructor(
    public detail: Detail,
  ) { }

  ngOnInit(): void {
  }

}
