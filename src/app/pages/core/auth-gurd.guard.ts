import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGurd: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('Token')) {
    return true;
  } else {
    alert('access denied auth')
    router.navigate(['/signin'])
    return false
  }

};
