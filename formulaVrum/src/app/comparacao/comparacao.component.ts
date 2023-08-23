import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparacao',
  templateUrl: './comparacao.component.html',
  styleUrls: ['./comparacao.component.css']
})
export class ComparacaoComponent implements OnInit {
  carros: any[]=[]
  carrosBusca: any[]=[]

  termoBusca : any;

  constructor() { }

  ngOnInit(): void {
    const carrosNoLocalStorage = localStorage.getItem('carros');
    console.log(carrosNoLocalStorage)
    if (carrosNoLocalStorage) {
      this.carros = JSON.parse(carrosNoLocalStorage);
    }
  }
    procurar(){
      if (this.termoBusca) {
        this.carros.forEach(carro => {
          
              if(carro.nome.toLowerCase().includes(this.termoBusca.toLowerCase())) {
                this.carrosBusca.push(carro)
              }
              console.log(this.carrosBusca)
        });
        
    }

  }

}
