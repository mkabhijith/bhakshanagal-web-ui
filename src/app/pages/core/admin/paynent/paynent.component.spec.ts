import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaynentComponent } from './paynent.component';

describe('PaynentComponent', () => {
  let component: PaynentComponent;
  let fixture: ComponentFixture<PaynentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaynentComponent]
    });
    fixture = TestBed.createComponent(PaynentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
