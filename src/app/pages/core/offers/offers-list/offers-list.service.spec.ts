import { TestBed } from '@angular/core/testing';

import { OffersListService } from './offers-list.service';

describe('OffersListService', () => {
  let service: OffersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
