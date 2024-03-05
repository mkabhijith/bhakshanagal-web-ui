import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCancelationComponent } from './my-cancelation.component';

describe('MyCancelationComponent', () => {
  let component: MyCancelationComponent;
  let fixture: ComponentFixture<MyCancelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCancelationComponent]
    });
    fixture = TestBed.createComponent(MyCancelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
