import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDEFCustomItemComponent } from './detail-defcustom-item.component';

describe('DetailDEFCustomItemComponent', () => {
  let component: DetailDEFCustomItemComponent;
  let fixture: ComponentFixture<DetailDEFCustomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDEFCustomItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDEFCustomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
