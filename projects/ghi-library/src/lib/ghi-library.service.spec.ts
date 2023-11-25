import { TestBed } from '@angular/core/testing';

import { GhiLibraryService } from './ghi-library.service';

describe('GhiLibraryService', () => {
  let service: GhiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
