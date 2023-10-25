import { CanActivateChildFn } from '@angular/router';

export const notCompleteGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
