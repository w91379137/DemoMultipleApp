import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCustomAbcPageComponent } from './setting-custom-abc-page.component';

describe('SettingCustomAbcPageComponent', () => {
  let component: SettingCustomAbcPageComponent;
  let fixture: ComponentFixture<SettingCustomAbcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingCustomAbcPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingCustomAbcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
