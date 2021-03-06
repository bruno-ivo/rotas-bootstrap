import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
  {path: '', component: AlunosComponent, children: [
    {path: 'novo', component: AlunoFormularioComponent},
    {path: ':id', component: AlunoDetalheComponent,
        resolve: { aluno : AlunoDetalheResolver}
    },
    {path: ':id/editar', component: AlunoFormularioComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule{}
