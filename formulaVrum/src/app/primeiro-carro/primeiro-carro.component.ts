import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-carro',
  templateUrl: './primeiro-carro.component.html',
  styleUrls: ['./primeiro-carro.component.css']
})
export class PrimeiroCarroComponent implements OnInit {
  carros: any[]=[]
  carrosPrimeiroCarro: any[]=[]



  constructor() { }

  ngOnInit(): void {
    console.log("foi")
    const carrosNoLocalStorage = localStorage.getItem('carros');
    console.log(carrosNoLocalStorage)
    if (carrosNoLocalStorage) {
      this.carros = JSON.parse(carrosNoLocalStorage);
    }
    for(let carro of this.carros){
      console.log(carro.preco)

      if(carro.preco<70000){
        this.carrosPrimeiroCarro.push(carro);
        console.log(this.carrosPrimeiroCarro)
      }
    }

  }

}
