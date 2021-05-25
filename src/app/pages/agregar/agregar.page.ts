import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseoService } from '../../services/deseo.service';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  variableDeAgregarLISTA: Lista;
  Variable_nombreItem = '';

  constructor( private variable_servicio: DeseoService,
               private variable_route: ActivatedRoute ) { 

    //Leemos del url
const variableListaID = this.variable_route.snapshot.paramMap.get('listaId');   //listaId es el parámetro que tenemos en tab1-routing.module.ts ( path: 'agregar/:listaId',)
                            //snapshot.paramMap para evitar hacer un observable
                            //get -> Para coger la id qo parámetro que metemos en el ('dato o id')

      console.log(variableListaID);


      this.variableDeAgregarLISTA = this.variable_servicio.obtenerLista( variableListaID );
      
      console.log(this.variableDeAgregarLISTA);
      
  }

  ngOnInit() {
  }


  agregarItem(){

    if ( this.Variable_nombreItem.length === 0 ){   //Sino escribimos nada no se guarde, se salga
      return;
    }
    
      const variable_NUEVO_Item = new ListaItem ( this. Variable_nombreItem );   //ListaItem se añade este model porque es un item particular, no el conjunto como el otro model
      //Variable_nombreItem lo metemos en variable_NUEVO_Item con la estructura del model (ListaItem)
      this.variableDeAgregarLISTA.items.push( variable_NUEVO_Item );
      //Cogemos la variable (variableDeAgregarLISTA) donde está el contenido de todo, eligiendo un apartado del model (items) para insertar (push) el nuevo dato introducido (variable_NUEVO_Item)

      this.Variable_nombreItem = '';   //Lo volvemos a inicializar vacío, para limpiarlo y poder escribir uno nuevo
    
        this.variable_servicio.guardarStorage();
   
    }


    cambioCheck( item_recibido ){
        console.log( item_recibido ); //Vemos que al seleccionar sale true y al deseleccionar sale false
        
        


        //Versión larga e incompleta
        //const item_pendientes = this.variableDeAgregarLISTA.items.filter( todos_los_items =>{  
         // return !todos_los_items.completado;
        //})

          //Versión corta y completa
          const item_pendientes = this.variableDeAgregarLISTA.items.filter( todos_los_items => !todos_los_items.completado).length  //length para que me diga cuantos elementos hay
            //Metemos en la variable el listado de items. Filter devuelve los elementos que cumplan una condición que la ponemos en el return
            //Devuelve las listas que este en false

          console.log({item_pendientes});   //Al ponerlo entre {} nos sale el nombre de la variable como texto + : + los que nos falta por completar, si está todo completo nos sale 0
          
    
          if ( item_pendientes === 0 ){   //Si los items está todos seleccionado, a acabado la lista
              this.variableDeAgregarLISTA.terminadaFecha = new Date();  //Se graba en terminadaFecha la fecha
              this.variableDeAgregarLISTA.terminada = true;  //Se cambia de false a true, porque ha acabado, de ese modo sale que está completado o no y la fecha de terminado
          }
          else{     //Si se quita una selección o no está terminada
            this.variableDeAgregarLISTA.terminadaFecha = null;  //La fecha se pone en null, si tenía fecha de acabado se quita al quitar la selección
            this.variableDeAgregarLISTA.terminada = false; //Si estaba en true se cambia a false porque ya no está completado
          }


          this.variable_servicio.guardarStorage();   //Guardamos permanentemente

          console.log(this.variable_servicio.variable_listas);
          

    }



    borrar(index_recibido_por_boton:number){
      this.variableDeAgregarLISTA.items.splice( index_recibido_por_boton, 1 );
      //splice para borrar -> 1º desde donde queremos borrar, desde la primera posición elegimos y por eso poemos el index que recibimos y el 2º nos pide cuantos elementos, ponemos 1 porque solo queremos borrar ese
      this.variable_servicio.guardarStorage();  //Llamamos a la función del servicio apra guardar los cambios y sean permanente
    }




}
