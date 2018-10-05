import { TestBed, inject } from '@angular/core/testing';

import { TestroomService } from './testroom.service';

describe('TestroomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestroomService]
    });
  });

  it('should be created', inject([TestroomService], (service: TestroomService) => {
    expect(service).toBeTruthy();
  }));
});
