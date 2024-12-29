import { TestBed } from '@angular/core/testing';

import { LanguageTextService } from './language-text.service';

describe('LanguageTextService', () => {
  let service: LanguageTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
