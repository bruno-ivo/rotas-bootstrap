import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "./login/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {CursosGuard} from "./guards/cursos.guard";
import {AlunosGuard} from "./guards/alunos.guard";
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
/*,
    CursosComponent,
    CursoDetalheComponent,*/

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    //CursosModule,
    //AlunosModule,
    FormsModule,
  ],
  providers: [/*CursosService,*/AuthService,
              AuthGuard,
              CursosGuard,
              AlunosGuard,
              AlunosDeactivateGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
