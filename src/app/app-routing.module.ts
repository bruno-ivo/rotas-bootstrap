import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from "./guards/auth.guard";
import {CursosGuard} from "./guards/cursos.guard";
import {AlunosGuard} from "./guards/alunos.guard";
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {path: 'cursos', loadChildren:() => import('./cursos/cursos.module').then(m=>m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]},
  {path: 'alunos', loadChildren:() => import('./alunos/alunos.module').then(m=>m.AlunosModule),
    canActivate: [AuthGuard],
    canActivateChild: [AlunosGuard],
    canDeactivate: [AlunosDeactivateGuard],
    canLoad: [AuthGuard]},
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
