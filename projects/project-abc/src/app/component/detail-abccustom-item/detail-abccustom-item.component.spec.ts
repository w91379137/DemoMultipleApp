import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailABCCustomItemComponent } from './detail-abccustom-item.component';

describe('DetailABCCustomItemComponent', () => {
  let component: DetailABCCustomItemComponent;
  let fixture: ComponentFixture<DetailABCCustomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailABCCustomItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailABCCustomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
