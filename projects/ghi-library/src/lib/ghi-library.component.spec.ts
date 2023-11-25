import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhiLibraryComponent } from './ghi-library.component';

describe('GhiLibraryComponent', () => {
  let component: GhiLibraryComponent;
  let fixture: ComponentFixture<GhiLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhiLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
