import { TestBed } from '@angular/core/testing';

import { SimpleWebsiteComponentsService } from './simple-website-components.service';

describe('SimpleWebsiteComponentsService', () => {
  let service: SimpleWebsiteComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleWebsiteComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
