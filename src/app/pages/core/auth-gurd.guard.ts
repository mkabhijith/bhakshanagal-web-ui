import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

export const authGurd: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  const router = inject(Router);
  
  if (storage.authKey) {
    return true;
  } else {
    alert('access denied auth');
    router.navigate(['/signin'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
};
