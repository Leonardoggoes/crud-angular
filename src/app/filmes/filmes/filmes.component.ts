import { Component, OnInit } from '@angular/core';
import { Filmes } from '../model/filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  filmes: Filmes[]  = [
    {_id: '1', nome: 'teste', categoria: 'comédia'}
  ];
  displayedColumns = ['nome', 'categoria'];

  constructor(){

     
  }

  ngOnInit(): void {}
}
