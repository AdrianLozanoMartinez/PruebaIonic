

export class ListaItem{     //Para ser usado fuera, en otro componente, como en lista.model.ts

    descripcion: string;
    completado: boolean;

    constructor ( descripcion_recibida: string ){

        this.descripcion = descripcion_recibida;
        this.completado = false;    
    }



}