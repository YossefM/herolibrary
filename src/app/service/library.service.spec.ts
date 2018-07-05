import { TestBed, inject } from '@angular/core/testing';

import { libraryService } from './library.service';

describe('LibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [libraryService]
    });
  });

  it('should be created', inject([libraryService], (service: libraryService) => {
    expect(service).toBeTruthy();
  }));
});
