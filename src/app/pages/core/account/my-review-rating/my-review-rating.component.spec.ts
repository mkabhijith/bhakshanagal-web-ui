import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReviewRatingComponent } from './my-review-rating.component';

describe('MyReviewRatingComponent', () => {
  let component: MyReviewRatingComponent;
  let fixture: ComponentFixture<MyReviewRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyReviewRatingComponent]
    });
    fixture = TestBed.createComponent(MyReviewRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
