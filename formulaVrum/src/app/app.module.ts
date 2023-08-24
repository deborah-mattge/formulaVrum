import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaInicialModule } from './tela-inicial/tela-inicial.module';
import { CarroModule } from './carro/carro.module';
import { NavComponent } from './nav/nav.component';
import { NavModule } from './nav/nav.module';
import { FormsModule } from '@angular/forms';
import { PrimeiroCarroComponent } from './primeiro-carro/primeiro-carro.component';
import { ComparacaoComponent } from './comparacao/comparacao.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TelaInicialComponent,
    PrimeiroCarroComponent,
    ComparacaoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelaInicialModule, 
    CarroModule, 
    NavModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
