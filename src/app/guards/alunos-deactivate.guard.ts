import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormularioComponent } from '../alunos/aluno-formulario/aluno-formulario.component';


// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormularioComponent> {
  canDeactivate(
    component: AlunoFormularioComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return component.podeMudarRota();
  }
}
