import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() carros: any[] = [];
  @Output() carrosChanged: EventEmitter<Carro[]> = new EventEmitter<Carro[]>();
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
      nome: 'Chevrolet Tracker AT 1.0', 
      preco: 113267,
      combustivel: 'Flex',
      ipva: 4531,
      categoria: 'SUV',
      lugares: 5,
      tracao: 'Dianteira',
      cambio: 'Automático de 6 marchas',
      consumoUrbano: '7,8 km/L (A) 11,2 km/L (G)',
      consumoRodoviario: '9,6 km/L (A) 13,6 km/L (G)'
  
    };
  // Adiciona o novo carro à lista
  this.carros.push(novoCarro);
  this.carrosChanged.emit(this.carros);
  // Salva a lista atualizada no localStorage
  localStorage.setItem('carros', JSON.stringify(this.carros));
  console.log(this.carros)


  }



}
