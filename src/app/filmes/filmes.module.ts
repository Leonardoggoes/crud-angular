import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { FilmesRoutingModule } from './filmes-routing.module';
import { FilmesComponent } from './filmes/filmes.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    FilmesComponent
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    AppMaterialModule
  ]
})
export class FilmesModule { }
