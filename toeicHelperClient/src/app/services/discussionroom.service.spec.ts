import { TestBed, inject } from '@angular/core/testing';

import { DiscussionroomService } from './discussionroom.service';

describe('DiscussionroomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscussionroomService]
    });
  });

  it('should be created', inject([DiscussionroomService], (service: DiscussionroomService) => {
    expect(service).toBeTruthy();
  }));
});
