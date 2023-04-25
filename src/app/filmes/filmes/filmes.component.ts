import { Component, OnInit } from '@angular/core';
import { Filmes } from '../model/filmes';
import { FilmesService } from '../services/filmes.service';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  filmes: Filmes[]  = [];
  displayedColumns = ['nome', 'categoria'];
  FilmesService: FilmesService;

  constructor(){
    this.FilmesService = new FilmesService();
    this.filmes = this.FilmesService.listaFilmes();
  }

  ngOnInit(): void {}
}
