import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPopupComponent } from './options-popup.component';

describe('OptionsPopupComponent', () => {
  let component: OptionsPopupComponent;
  let fixture: ComponentFixture<OptionsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
