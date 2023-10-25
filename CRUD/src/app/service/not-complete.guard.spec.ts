import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { notCompleteGuard } from './not-complete.guard';

describe('notCompleteGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notCompleteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
