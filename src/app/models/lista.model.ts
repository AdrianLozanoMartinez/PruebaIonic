import { ListaItem } from './lista-item.model';  //Model creado



export class Lista {        //Para ser usado fuera, en otro componente


    id: number;
    titulo: string;
    creadaFecha: Date;
    terminadaFecha: Date;
    terminada: boolean;
    items: ListaItem[];     //Lista del model creado, en arreglo para coger todos los valores que contiene

    constructor ( titulo_recibido: string ){

        this.titulo = titulo_recibido;  //El título que tendremos será el introducido por nosotros

        this.creadaFecha = new Date();  //Se inicia en el día actual cuando se crea

        this.terminada = false; //En false para que no esté terminada hasta que la pongamos como tal

        this.items = [];        //Cuando se inicie esté vacío la lista, para ser rellenada

        this.id = new Date().getTime();  //Lo suyo una base de datos que guarde la ID. Aunque se hace así para guardar la fecha/hora de creación de forma de id porque no se va a crear dos id en el mismo momento

    }

}

