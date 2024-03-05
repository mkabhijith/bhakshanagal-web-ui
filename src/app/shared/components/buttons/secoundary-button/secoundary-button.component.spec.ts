import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundaryButtonComponent } from './secoundary-button.component';

describe('SecoundaryButtonComponent', () => {
  let component: SecoundaryButtonComponent;
  let fixture: ComponentFixture<SecoundaryButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecoundaryButtonComponent]
    });
    fixture = TestBed.createComponent(SecoundaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
