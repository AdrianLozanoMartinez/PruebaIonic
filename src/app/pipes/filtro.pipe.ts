import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtro',//añadimos coma
  pure: false    //Ponemos pure y en false para que esté pendiente a los cambios y actualice si va a completado o pendiente u otra condición que hayamos marcado abajo, hace una actualización instantánea sin actualizar página
})
export class FiltroPipe implements PipeTransform {

  transform(todasListas: Lista[], listaCompletada: boolean = true): Lista[] {
    
    //todasListas -> Queremos coger toda la lista y filtrarla, para ello usamos otra variable llamada listaCompletada que la prediponemos de true inicialmente, todo lo ponemos que lleve el model Lista en forma de arreglo
    
    return  todasListas.filter (listaRecibida => listaRecibida.terminada === listaCompletada);   //filter -> Devuelve toda la lista que esté terminada, se obtiene al comparar la que recibimos con la que tenemos.terminada
  //return -> Retornamos/devolvemos del pipe la función de flecha
  }

}
