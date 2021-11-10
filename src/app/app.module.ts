import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
import { FormsModule } from '@angular/forms';




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
    CursosModule,
    AlunosModule,
    FormsModule
  ],
  providers: [/*CursosService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
