import { Component, OnInit, ViewChild } from '@angular/core';
import { ObtenerpokemonService } from './servicios/obtenerpokemon.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) public infinito: IonInfiniteScroll;
public formulario: FormGroup;

  constructor(
    public obtenerpokemon: ObtenerpokemonService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    //validaciones sync // validar dos campos o mas
    //validaciones async//
    this.formulario = this.formBuilder.group({
      //priemr parametro: el vALor del elemento,
      //segundo parametro: validacion sync / validaciones custom,
      //tercer parametro: validaciones Async (desde internet);
      nombrePokemon: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.max(15)
      ])
  }),
    this.obtenerpokemon.obtener20primeros();
  };

  public cargandomascosas(evente: Event): void {
    this.obtenerpokemon.obtenermaspokemones();
    this.infinito.complete();
  }
}
