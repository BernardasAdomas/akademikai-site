import { TestBed } from '@angular/core/testing';

import { HonoraryMemberService } from './honorary-member.service';

describe('HonoraryMemberService', () => {
  let service: HonoraryMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HonoraryMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
