import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarCardComponent } from './sidbar-card.component';

describe('SidbarCardComponent', () => {
  let component: SidbarCardComponent;
  let fixture: ComponentFixture<SidbarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidbarCardComponent]
    });
    fixture = TestBed.createComponent(SidbarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
