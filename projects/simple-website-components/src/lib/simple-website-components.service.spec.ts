import { TestBed } from '@angular/core/testing';

import { SimpleWebsiteComponentsService } from './simple-website-components.service';

describe('SimpleWebsiteComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleWebsiteComponentsService = TestBed.get(SimpleWebsiteComponentsService);
    expect(service).toBeTruthy();
  });
});
