import { Component, ElementRef, ViewChild } from '@angular/core';

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

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    this.txtBuscar.nativeElement.value = ""; // aqui le digo que el valor del txtBuscar es un string vacio
  }
}
