import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseoService } from '../../services/deseo.service';
// import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public variable_servicio: DeseoService,
               private variable_router: Router,
               private variable_alert: AlertController ) {}


  async agregarLista() {    //Añadimos async para que no de error await, al convertirlo en promesa la función y usar async podemos usar la función como promesa fuera, si ponemos el nombre(). aparecerá las opciones
    // this.variable_router.navigateByUrl('/tabs/tab1/agregar');

    const variable_alert = await this.variable_alert.create({   //Es una promesa, await dice que espere a que haga todo antes de nada y lo almacena en la variable alert
      // cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.',
      // buttons: ['OK']
      buttons: [
         {
           text: 'Cancelar', //1ºBotón
           role: 'cancel',   //Acción predeterminada por ionic
           handler: () => {  //Acción que realizará, en este caso informar que se ha cancelado
             console.log('Cancelar');
           }
         },
        {
          text: 'Crear',    //2º Botón
          handler: ( dato_recibido ) => {   //Acción que realizará, en este caso informar del dato obtenido
            // console.log( dato );

              if ( dato_recibido.titulo.length === 0 ) {   //titulo relacionado con el name del input, debe llevar el mismo nombre
                return;
              }
              //Creamos lista sino es 0
              
              const listaId = this.variable_servicio.crearLista( dato_recibido.titulo );
            
                this.variable_router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);

              console.log(dato_recibido.titulo);
              
            }
        }
      ]
    });


    variable_alert.present();

  }



  // listaSeleccionada ( variable_listaLocal:Lista ){
  //     console.log(variable_listaLocal);
  //     this.variable_router.navigateByUrl(`/tabs/tab1/agregar/${ variable_listaLocal.id }`);   //Nos lleva a la lista que le damos clic, porque cogemos la id del elemento seleccionado y nos lleva a agregar para ver y poder eliminar o modificar luego
      
  // }

}
