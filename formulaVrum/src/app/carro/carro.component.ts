import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
interface Carro{
  nome: string
  ano: number;
  marca: string
  preco: number
  combustivel: string
  ipva: number
  categoria: string
  lugares: number
  tracao: string
  cambio: string
  consumoUrbano: string
  consumoRodoviario: string
  imagem: string
}
@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
   carros: Carro[] = [
    {
      nome: ' Onix LT 1.0 Turbo',
      ano: 2023,
      marca: 'Chevrolet',
      preco: 69000,
      combustivel: 'Flex',
      ipva: 3297,
      categoria: 'Hatch',
      lugares: 5,
      tracao: 'Dianteira',
      cambio: 'Manual',
      consumoUrbano: '9,1 km/L (A) 13,1 km/L (G)',
      consumoRodoviario: '11,1 km/L (A) 16,1 km/L (G)'
      ,imagem: '/assets/chevrolet-onix-joy.jpg'
    },
    {
      nome: ' Cruze LT 1.4 Turbo',
      ano: 2023,
      marca: 'Fiat',
      preco: 142665 ,
      combustivel: 'Flex',
      ipva: 5707,
      categoria: 'Sedã',
      lugares: 5,
      tracao: 'Dianteira',
      cambio: 'Manual',
      consumoUrbano: '7,1 km/L (A), 10,5 km/L (G)',
      consumoRodoviario: '9,7 km/L(A), 13,9 km/L (G)'
      ,imagem: '/assets/Cruze-Premier.jpg'

    },
    {
      nome: ' Tracker AT 1.0',
      ano: 2023,
      marca: 'Chevrolet',
      preco: 113267,
      combustivel: 'Flex',
      ipva: 4531,
      categoria: 'SUV',
      lugares: 5,
      tracao: 'Dianteira',
      cambio: 'Automático',
      consumoUrbano: '7,8 km/L (A) 11,2 km/L (G)',
      consumoRodoviario: '9,6 km/L (A) 13,6 km/L (G)'
      ,imagem: '/assets/chevrolet-tracker.jpg'

    },
    {
      nome: ' Tracker AT 1.0',
      ano: 2023,
      marca: 'Chevrolet',
      preco: 113267,
      combustivel: 'Flex',
      ipva: 4531,
      categoria: 'SUV',
      lugares: 5,
      tracao: 'Dianteira',
      cambio: 'Automático',
      consumoUrbano: '7,8 km/L (A) 11,2 km/L (G)',
      consumoRodoviario: '9,6 km/L (A) 13,6 km/L (G)'
      ,imagem: '/assets/chevrolet-tracker.jpg'

    },
    {
      nome: ' Tracker AT 1.0',
      ano: 2023,
      marca: 'Chevrolet',
      preco: 113267,
      combustivel: 'Flex',
      ipva: 4531,
      categoria: 'SUV',
      lugares: 5,
      tracao: 'Dianteira',
      cambio: 'Automático',
      consumoUrbano: '7,8 km/L (A) 11,2 km/L (G)',
      consumoRodoviario: '9,6 km/L (A) 13,6 km/L (G)'
      ,imagem: '/assets/chevrolet-tracker.jpg'

    }
  ]
      constructor() { }

  ngOnInit(): void {
    // Obtém a lista de carros do localStorage (se existir)
    
    localStorage.setItem('carros', JSON.stringify(this.carros));


   
  }
  
  
  adicionarCarro() {
    const novoCarro: Carro = {
      nome: ' Tracker AT 1.0',
      ano: 2023,
      marca: 'Chevrolet', 
      preco: 113267,
      combustivel: 'Flex',
      ipva: 4531,
      categoria: 'SUV',
      lugares: 5,
      tracao: 'Dianteira',
      cambio: 'Automático de 6 marchas',
      consumoUrbano: '7,8 km/L (A) 11,2 km/L (G)',
      consumoRodoviario: '9,6 km/L (A) 13,6 km/L (G)'
      ,imagem: 'src/assets/chevrolet-onix-joy.jpg'

  
    };
  // Adiciona o novo carro à lista
  this.carros.push(novoCarro);
  // Salva a lista atualizada no localStorage
  console.log(this.carros)


  }
  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }


}
