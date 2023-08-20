import { Component, OnInit, Input } from '@angular/core';
import { CarroComponent } from '../carro/carro.component';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  carros: any[]=[]

  constructor() { }

  ngOnInit(): void {
    const carrosNoLocalStorage = localStorage.getItem('carros');
    if (carrosNoLocalStorage) {
      this.carros = JSON.parse(carrosNoLocalStorage);
    }
    console.log(this.carros)

  }

}
