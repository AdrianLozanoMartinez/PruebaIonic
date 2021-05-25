import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    NombreComponenteComponent
  ],
  exports: [
    NombreComponenteComponent   //Lo que se quiere usar fuera de este módulo, en otras páginas
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule    //Incluimos modulo de pipe para ser usado el pipe en el componente creado que tenga relación el module
  ]
})
export class ModuloDeComponenteModule { }
