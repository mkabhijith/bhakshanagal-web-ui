import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGurd: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('Token')) {
    return true;
  } else {
    alert('access denied auth');
    router.navigate(['/signin'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
};
