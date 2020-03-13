import { TestBed } from '@angular/core/testing';

import { CustomEventTitleService } from './custom-event-title.service';

describe('CustomEventTitleService', () => {
  let service: CustomEventTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomEventTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
