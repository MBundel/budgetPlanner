import { TestBed } from '@angular/core/testing';

import { TwelveDataApiService } from './twelve-data-api.service';

describe('TwelveDataApiService', () => {
  let service: TwelveDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwelveDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
