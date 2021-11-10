import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AlunosGuard implements CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Guarda de roda filha');

    if(state.url.includes('editar')){
      alert('Usuário sem permissão');
      return false;
    }
    return true;
  }

}
