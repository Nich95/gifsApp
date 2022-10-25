import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) {}

  get historial() {
    return this.gifsService.historia;
  }

  buscar( termino: string ) {
    // utilizamos los metodos del servicio y le entregamos el termino
    this.gifsService.buscarGif( termino );
  }
}
