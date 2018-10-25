import { TestBed } from '@angular/core/testing';

import { SimpleAjaxService } from './simpleajax.service';

describe('SimpleAjaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleAjaxService = TestBed.get(SimpleAjaxService);
    expect(service).toBeTruthy();
  });
});
