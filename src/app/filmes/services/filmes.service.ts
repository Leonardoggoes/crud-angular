import { Injectable } from '@angular/core';
import { Filmes } from '../model/filmes';


@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  constructor() { }

  listaFilmes(): Filmes[] {
    return [
      {_id: '1', nome: 'teste', categoria: 'comédia'},
      {_id: '2', nome: 'filhos', categoria: 'ação'}
           ]
  }
  
}
