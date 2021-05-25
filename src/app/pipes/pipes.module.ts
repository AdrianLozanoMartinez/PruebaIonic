import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
// import { CommonModule } from '@angular/common';   //Podemos quitarlo porque no vamos a usar ngif ni ngfor etc...



@NgModule({
  declarations: [FiltroPipe],
  exports: [FiltroPipe]   //Para usarse fuera de aquí, en otros componentes
  // imports: [
  //   CommonModule
  // ]
})
export class PipesModule { }
