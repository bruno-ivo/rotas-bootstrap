import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';

const alunosRoutes: Routes = [
  {path: 'alunos', component: AlunosComponent},
  {path: 'alunos/novo', component: AlunoFormularioComponent},
  {path: 'alunos/:id', component: AlunoDetalheComponent},
  {path: 'alunos/:id/editar', component: AlunoFormularioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule{}
