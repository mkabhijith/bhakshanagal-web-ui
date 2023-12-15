import { TestBed } from '@angular/core/testing';

import { ApiPathInterceptor } from './api-path.interceptor';

describe('ApiPathInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiPathInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiPathInterceptor = TestBed.inject(ApiPathInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
