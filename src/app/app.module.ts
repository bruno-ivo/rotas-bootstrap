import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "./login/auth.service";
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';




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
    FormsModule
  ],
  providers: [/*CursosService,*/AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
