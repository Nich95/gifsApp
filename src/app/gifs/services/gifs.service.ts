import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // esto le dice que es de acceso global para la aplicación
})
export class GifsService {

  private  _apiKey: string = 'btokDU8o5Kq1NVuthGjjGBAN2pZ4lPYG';

  private _historial: string[] = [];

  get historia() {
    return [...this._historial];
  }

  buscarGif( query: string = '' ) {
    query = query.trim().toLowerCase();
    
    if ( !this._historial.includes( query ) ) { // si en el historial no esta incluido el valor agregado ejecuta el código
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);
    }

    console.log(this._historial);
  }
}
