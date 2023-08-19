import { Component, OnInit, Input } from '@angular/core';
import { CarroComponent } from '../carro/carro.component';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  @Input() carros: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.carros)

  }
  mostrar(){
    console.log(this.carros)
  }
  atualizarCarros(novosCarros: any[]) {
    this.carros = novosCarros;
  }

}
