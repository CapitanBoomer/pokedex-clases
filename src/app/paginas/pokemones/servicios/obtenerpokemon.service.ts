import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultadoPeticion, Info } from 'src/app/modelo/resultado-peticion';

@Injectable()
export class ObtenerpokemonService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  public resultado!: ResultadoPeticion;
  public info: Array<Info> = [];
  constructor(
    private client: HttpClient
  ) { }
  public obtener20primeros() {
    this.client.get<ResultadoPeticion>(this.url)
      .subscribe(peticion => {
        this.resultado = peticion
        this.info.push(...peticion.results)

      });
  }
  public obtenermaspokemones() {
    return this.client.get<ResultadoPeticion>(this.resultado.next)
      .subscribe(peticion => {
        this.resultado = peticion
        this.info.push(...peticion.results);
      })
  }
}


