import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CarroComponent } from './carro/carro.component';
import { PrimeiroCarroComponent } from './primeiro-carro/primeiro-carro.component';
import { ComparacaoComponent } from './comparacao/comparacao.component';



const routes: Routes = [
  { path: '', redirectTo: '/tela-inicial', pathMatch: 'full' },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: '', redirectTo: '/carro', pathMatch: 'full' },
  { path: 'primeiro-carro', component:PrimeiroCarroComponent },
  { path: 'carro', component:CarroComponent },
  { path: 'comparacao', component:ComparacaoComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }