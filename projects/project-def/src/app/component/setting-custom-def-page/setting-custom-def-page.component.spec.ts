import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCustomDefPageComponent } from './setting-custom-def-page.component';

describe('SettingCustomDefPageComponent', () => {
  let component: SettingCustomDefPageComponent;
  let fixture: ComponentFixture<SettingCustomDefPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingCustomDefPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingCustomDefPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
