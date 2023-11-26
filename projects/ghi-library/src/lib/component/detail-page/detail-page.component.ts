import { Component, Injector, OnInit } from '@angular/core';
import { Detail, DetailItemComponent } from '../detail-item/detail-item.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ghi-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {

  Item = DetailItemComponent;

  myInjector: Injector;

  constructor(
    private readonly injector: Injector,
    private readonly route: ActivatedRoute,
  ) {
    let data = this.route.snapshot.data as any;
    if (data && data.item) {
      this.Item = data.item;
    }
    this.myInjector =
        Injector.create({providers: [{provide: Detail, deps: []}], parent: injector});
    this.myInjector.get(Detail).text = 'text from parent injector';
  }

  ngOnInit(): void {
  }

}
