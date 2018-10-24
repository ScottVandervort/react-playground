import { TestBed } from '@angular/core/testing';

import { SimpleajaxService } from './simpleajax.service';

describe('SimpleajaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleajaxService = TestBed.get(SimpleajaxService);
    expect(service).toBeTruthy();
  });
});
