import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseoService {


  variable_lista: Lista[] = []; //De tipo lista, del model creado (lista.model.ts)

  constructor() {

    console.log('Servicio igual en todo'); //No se ejecuta varias veces, solo una vez aunque es llamado por varios componente, de ese modo es más rápido, solo carga una vez y se queda cargado
    
    const variable_lista1 = new Lista('Una lista cualquiera 1');
    const variable_lista2 = new Lista('Una lista cualquiera 2');

    this.variable_lista.push(variable_lista1, variable_lista2);

    console.log(this.variable_lista);
    

   }
}
