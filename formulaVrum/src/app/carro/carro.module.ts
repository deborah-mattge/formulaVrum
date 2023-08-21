import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroComponent } from './carro.component';


@NgModule({
  declarations: [
    CarroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarroComponent,
  ]
})
export class CarroModule { }
