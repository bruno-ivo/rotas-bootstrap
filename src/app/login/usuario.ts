export class  Usuario {
  private _nome: any ;
  private _senha: any ;


  get nome(): any {
    return this._nome;
  }

  set nome(value: any) {
    this._nome = value;
  }

  get senha(): any {
    return this._senha;
  }

  set senha(value: any) {
    this._senha = value;
  }
}
