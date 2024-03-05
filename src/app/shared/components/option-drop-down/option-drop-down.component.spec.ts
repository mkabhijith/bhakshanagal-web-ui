import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDropDownComponent } from './option-drop-down.component';

describe('OptionDropDownComponent', () => {
  let component: OptionDropDownComponent;
  let fixture: ComponentFixture<OptionDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionDropDownComponent]
    });
    fixture = TestBed.createComponent(OptionDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
