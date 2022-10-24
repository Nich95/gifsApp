import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  // dentro de los parentesis ponemos el elemento del html que se quiere buscar
  // el "!" es un operador para asegurar que un elemento no es null
  // entonces le decimos al txtBuscar que nunca va a ser nulo
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; // le digo al elementref que es de tipo htmlinputelement
                                                                    // y esto da las funciones para manupular los datos del input

  constructor( private gifsService: GifsService ) {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    // trim quita los espacios en blanco y length cuenta la cantidad de caracteres del string
    if ( valor.trim().length === 0 ) { return; }

    this.gifsService.buscarGif( valor );
    this.txtBuscar.nativeElement.value = ""; // aqui le digo que el valor del txtBuscar es un string vacio
  }
}
