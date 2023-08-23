import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparacaoComponent } from './comparacao.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  declarations: [
    ComparacaoComponent
  ],
  imports: [
    CommonModule, FormsModule, BrowserModule
  ]
})
export class ComparacaoModule { }