import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
// Navegaciòn
import { RouterModule } from '@angular/router';
// Hacer peticiones a internet
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import {ObtenerpokemonService} from './servicios/obtenerpokemon.service'
import { PokemonesPageRoutingModule } from './pokemones-routing.module';

import { PokemonesPage } from './pokemones.page';
import { InfoPokemonComponent } from './componentes/info-pokemon/info-pokemon.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PokemonesPageRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonesPage, InfoPokemonComponent],
  providers: [
    ObtenerpokemonService
  ]
})
export class PokemonesPageModule {}
