import { TestBed, inject } from '@angular/core/testing';

import { AddExamService } from './add-exam.service';

describe('AddExamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddExamService]
    });
  });

  it('should be created', inject([AddExamService], (service: AddExamService) => {
    expect(service).toBeTruthy();
  }));
});
