import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id:any;
  aluno: any;
  inscricao: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alunosService: AlunosService) { }

  ngOnInit(): void {
    /*this.inscricao = this.route.params.subscribe((params:any) =>{
      this.id = params['id'];

      this.aluno = this.alunosService.getAluno(this.id);
      if (this.id == null){
        this.router.navigate(['/naoEncontrado'], this.id);
      }
    });*/
    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log(info);
        this.aluno = info.aluno;
      }
    )
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  noOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
