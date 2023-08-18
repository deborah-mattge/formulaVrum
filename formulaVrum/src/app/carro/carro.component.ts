import { Component, OnInit } from '@angular/core';
interface Carro{
  nome: string
  preco: number
  combustivel: string
  ipva: number
  categoria: string
  lugares: number
  tracao: string
  cambio: string
  consumoUrbano: string
  consumoRodoviario: string
}
@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  carros: Carro[] = [];
  constructor() { }

  ngOnInit(): void {
    // Obtém a lista de carros do localStorage (se existir)
    const carrosNoLocalStorage = localStorage.getItem('carros');

    if (carrosNoLocalStorage) {
      this.carros = JSON.parse(carrosNoLocalStorage);
    }

   
  }
  
  
  adicionarCarro() {
    const novoCarro: Carro = {
      nome: 'Modelo X',
      preco: 80000,
      combustivel: 'Gasolina',
      ipva: 1500,
      categoria: 'SUV',
      lugares: 5,
      tracao: '4x2',
      cambio: 'Automático',
      consumoUrbano: '10 km/l',
      consumoRodoviario: '15 km/l',
    };
  // Adiciona o novo carro à lista
  this.carros.push(novoCarro);

  // Salva a lista atualizada no localStorage
  localStorage.setItem('carros', JSON.stringify(this.carros));
  }


}
