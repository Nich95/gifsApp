import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // esto le dice que es de acceso global para la aplicación
})
export class GifsService {

  private _historial: string[] = [];

  get historia() {
    return [...this._historial];
  }

  buscarGif( query: string ) {
    this._historial.unshift( query );
    console.log(this._historial);
  }
}
