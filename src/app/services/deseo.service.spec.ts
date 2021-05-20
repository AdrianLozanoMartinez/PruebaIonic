import { TestBed } from '@angular/core/testing';

import { DeseoService } from './deseo.service';

describe('DeseoService', () => {
  let service: DeseoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeseoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
