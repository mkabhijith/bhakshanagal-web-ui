import { TestBed } from '@angular/core/testing';

import { JwtDecorderService } from './jwt-decorder.service';

describe('JwtDecorderService', () => {
  let service: JwtDecorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtDecorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
