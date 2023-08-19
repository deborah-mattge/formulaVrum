import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaInicialModule } from './tela-inicial/tela-inicial.module';
import { CarroModule } from './carro/carro.module';
import { NavComponent } from './nav/nav.component';
import { NavModule } from './nav/nav.module';
import { CarroComponent } from './carro/carro.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    NavComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelaInicialModule, 
    CarroModule, 
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
