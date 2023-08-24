import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparacao',
  templateUrl: './comparacao.component.html',
  styleUrls: ['./comparacao.component.css']
})
export class ComparacaoComponent implements OnInit {
  carros: any[]=[]
  carrosBusca: any[]=[]
  carrosBusca2: any[]=[]


  termoBusca : string='';
  termoBusca2 : string='';


  constructor() { }

  ngOnInit(): void {
    const carrosNoLocalStorage = localStorage.getItem('carros');
 console.log(carrosNoLocalStorage)
 if (carrosNoLocalStorage) {
 this.carros = JSON.parse(carrosNoLocalStorage);
 }
}
 procurar(){
  

  console.log(this.termoBusca)
  if (this.termoBusca) {
    this.limpar()
  this.carros.forEach(carro => {
  
    if(carro.nome.toLowerCase().includes(this.termoBusca.toLowerCase())) {
    this.carrosBusca.push(carro)

   }
    console.log(this.carrosBusca)
  },
  );
  
 }else if (this.termoBusca2) {
  this.limpar2()
  this.carros.forEach(carro => {
  
    if(carro.nome.toLowerCase().includes(this.termoBusca2.toLowerCase())) {
    this.carrosBusca2.push(carro)

   }
    console.log(this.carrosBusca)
  },
  );
  
 }
 this.termoBusca=''
  }
  limpar(){
    this.carrosBusca=[]
  }
  limpar2(){
    this.carrosBusca2=[]
  }
  
  

}
