import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticationService } from './autentication.service';

export const guardGuard: CanActivateFn = (route: ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean> => {
  const autenticationService = inject(AutenticationService);
  return autenticationService.UsuarioAutenticado;
};
