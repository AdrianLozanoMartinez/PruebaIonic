import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseoService {


  variable_listas: Lista[] = []; //De tipo lista, del model creado (lista.model.ts)

  constructor() {

    this.cargarStorage();   //Cargamos la función de cargar datos, lo ponemos aquí porque es lo primero que se carga

    //  console.log('Servicio igual en todo'); //No se ejecuta varias veces, solo una vez aunque es llamado por varios componente, de ese modo es más rápido, solo carga una vez y se queda cargado
    
    //  const variable_lista1 = new Lista('Una lista cualquiera 1');
    //  const variable_lista2 = new Lista('Una lista cualquiera 2');

    //  this.variable_listas.push(variable_lista1, variable_lista2);

    //  console.log(this.variable_listas);

  }
    


    crearLista ( titulo_recibido: string ){
      
      const variable_nuevaLista = new Lista( titulo_recibido );
      this.variable_listas.push( variable_nuevaLista );
      
      console.log(this.variable_listas);

      this.guardarStorage(); //Llamamos a la función y de ese modo se ejecuta guardando al darle al botón
  
  
      return variable_nuevaLista.id;   //Devolvemos la id de los elemntos creado
  
    }


    obtenerLista( id_recibido: string | number ){   //id recibido es un número o un string

      id_recibido = Number(id_recibido);   //Sabemos que es un number, por eso especificamos

      //Opción larga
        //return this.variable_listas.find( listaGuardada => {   
        //return listaGuardada.id === id_recibido; 
      //});

    //Opción corta
     return this.variable_listas.find( listaGuardada => listaGuardada.id === id_recibido); //La lista que teníamos y hemos guardado, lo pasamos al comando find (buscar) para poder comparar en la lista guardada el Id con el Id que recibimos. Si son iguales el id guardado con el id que recibimos se devuelve el id que utilizaremos para mostrar los datos
     
    }


  guardarStorage(){   //Se ve en en chrome en la parte de consola -> Aplicación

    localStorage.setItem('DatoStorage', JSON.stringify(this.variable_listas) ); //setItem -> Set = enviar / Item -> Dato
    //localStorage viene predeterminado en el navegaador, para guardar
    //'DatoStorage' Parametro de referencia
    //JSON.stringify transforma en string porque el localStorage solo guarda en string y po eso debemos transformar la variable_listas en string
  }


  cargarStorage(){

    if ( localStorage.getItem('DatoStorage') ) {    //Si coge (get) algún dato del Storage se ejecuta abajo, lo muestra

      this.variable_listas = JSON.parse( localStorage.getItem('DatoStorage') ); //getItem -> Get = obtener / Item -> Dato
      //JSON.parse Pasar string a arreglo. Si no tenemos nada dara error, porque hace una evaluación y sino hay nada da null, por eso lo metemos en if
    }
    else{   //En caso contrario muestra arreglo vacío, en teoría si lo hemos inicializado arriba en vacío no es necesario
      this.variable_listas = [];
    }

  }


  borrarListaServidor ( ListaRecibida_TS: Lista ){
      this.variable_listas = this.variable_listas.filter ( lista_recibida => lista_recibida.id != ListaRecibida_TS.id );
  
      this.guardarStorage();
    }
  
}
