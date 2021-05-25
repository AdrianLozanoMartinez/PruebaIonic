import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from '../../models/lista.model';
import { DeseoService } from '../../services/deseo.service';

@Component({
  selector: 'app-nombre-componente',
  templateUrl: './nombre-componente.component.html',
  styleUrls: ['./nombre-componente.component.scss'],
})
export class NombreComponenteComponent implements OnInit {

  @ViewChild( IonList ) variableViexchildLista: IonList;  //Agarra elemento de angular (html) para poder ejecutar acciones sobre ellos
  
  //@ViewChild( 'Variable_local_html' ) variableViexchildLista: IonList;  //Si cogemos una #variable_local_del_html, que lleve #
  
  
  @Input() terminada_html_ts = true;

  constructor(public variable_servicio: DeseoService,
              private variable_router: Router,
              private alert_variable: AlertController) { }

  ngOnInit() {}


  listaSeleccionada ( variable_listaLocal:Lista ){

    if ( this.terminada_html_ts ){
        this.variable_router.navigateByUrl(`/tabs/tab2/agregar/${ variable_listaLocal.id }`);
        console.log(variable_listaLocal);
      }
    else{
        console.log(variable_listaLocal);
        this.variable_router.navigateByUrl(`/tabs/tab1/agregar/${ variable_listaLocal.id }`);   //Nos lleva a la lista que le damos clic, porque cogemos la id del elemento seleccionado y nos lleva a agregar para ver y poder eliminar o modificar luego
    }
  }


  borrarLista( Lista_recibida_html: Lista){
    this.variable_servicio.borrarListaServidor(Lista_recibida_html);
  }


//Podríamos centralizar todo en un modulo y solo llamar
  async editarLista( Lista_recibida_html ) {    //Añadimos async para que no de error await, al convertirlo en promesa la función y usar async podemos usar la función como promesa fuera, si ponemos el nombre(). aparecerá las opciones
      // this.variable_router.navigateByUrl('/tabs/tab1/agregar');
  
      const variable_alert = await this.alert_variable.create({   //Es una promesa, await dice que espere a que haga todo antes de nada y lo almacena en la variable alert
        // cssClass: 'my-custom-class',
        header: 'Editar lista',
        inputs: [
          {
            name: 'titulo',
            type: 'text',
            value: Lista_recibida_html.titulo,
            placeholder: 'Nombre de la lista'
          }
        ],
        buttons: [
           {
             text: 'Cancelar', //1ºBotón
             role: 'cancel',   //Acción predeterminada por ionic
             handler: () => {  //Acción que realizará, en este caso informar que se ha cancelado
               console.log('Cancelar');
               this.variableViexchildLista.closeSlidingItems();
             }
           },
          {
            text: 'Actualizar',    //2º Botón
            handler: ( dato_recibido ) => {   //Acción que realizará, en este caso informar del dato obtenido
              // console.log( dato );
  
                if ( dato_recibido.titulo.length === 0 ) {   //titulo relacionado con el name del input, debe llevar el mismo nombre
                  return;
                }
                //Creamos lista sino es 0
                
                Lista_recibida_html.titulo = dato_recibido.titulo;
              
                console.log(dato_recibido.titulo);

                
                  this.variable_servicio.guardarStorage();
                  this.variableViexchildLista.closeSlidingItems();
                
              }
          }
        ]
      });
  
  
      variable_alert.present();
  }
}
