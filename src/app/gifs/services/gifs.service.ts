import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchGifsResponse, Gif } from '../interface/gitfs.interface';

@Injectable({
  providedIn: 'root' // esto le dice que es de acceso global para la aplicación
})
export class GifsService {

  private _apiKey: string = 'btokDU8o5Kq1NVuthGjjGBAN2pZ4lPYG';
  private _historial: string[] = [];

  // todo: cambiar any por el tipo correspondiente
  public resultados: Gif[] = []; // es quien recibe la info de la petición

  get historia() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {} // con esto se pueden hacer peticiones http

  buscarGif( query: string = '' ) {
    query = query.trim().toLowerCase();
    
    if ( !this._historial.includes( query ) ) { // si en el historial no esta incluido el valor agregado ejecuta el código
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);
    }

    // se recomienda colocar aqui el tipo de datos que es la respuesta porque el get es generico
    // lectura: este get luce como la interface especificada en los <>
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=btokDU8o5Kq1NVuthGjjGBAN2pZ4lPYG&q=${ query }&limit=10`)
              .subscribe( ( resp ) => {
                console.log( resp.data );
                this.resultados = resp.data;
              });
  }
}
