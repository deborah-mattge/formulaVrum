import { Component, OnInit, Input } from '@angular/core';
import { CarroComponent } from '../carro/carro.component';
import { filter } from 'rxjs';

interface ValorFiltro {
  label: string;
  checked: boolean;
}
interface CategoriaFiltro {
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  carros: any[]=[]
  marca: string ='';
  filtrado: boolean=false
  mostraFiltros: boolean = false;
  carrosFiltrados: any[]=this.carros
  categorias: CategoriaFiltro[] = [
    { label: 'Sedã', checked: false },
    { label: 'Hatch', checked: false },
    { label: 'SUV', checked: false },
    { label: 'Picape', checked: false },
    { label: 'Minivan', checked: false }
  ];
  valores: ValorFiltro[] = [
    { label: 'Até R$70.000', checked: false },
    { label: 'Até R$100.000', checked: false },
    { label: 'Até R$120.000', checked: false },
    { label: 'Mais de R$120.000', checked: false }
  ];
  constructor() { }

  filtroMobile(){
if (this.mostraFiltros){
  this.mostraFiltros = false
} else {
  this.mostraFiltros = true
}
  }
  ngOnInit(): void {
    const carrosNoLocalStorage = localStorage.getItem('carros');
    if (carrosNoLocalStorage) {
      this.carros = JSON.parse(carrosNoLocalStorage);
    }
    console.log(this.carros)
    console.log(this.filtrado)

  }

  marcas(marca:string){
    this.carrosFiltrados = this.carros.filter(carro => carro.marca === marca );
    console.log(this.carrosFiltrados);
    this.marca=marca
        this.filtrado=true;
    console.log(this.filtrado)
    console.log(marca)
    console.log()

  }
  aplicarFiltros(): void {
    this.carrosFiltrados = this.carros.filter(carro => {
        const categoriaFiltrada = this.categorias.some(categoria => categoria.checked);
        const valorFiltrado = this.valores.some(valor => valor.checked);

        return (!categoriaFiltrada || this.categorias.some(categoria => categoria.checked && categoria.label === carro.categoria)) &&
            (!valorFiltrado || this.valores.some(valor => valor.checked && this.verificarValor(carro, valor.label)));
    });
}
  verificarValor(carro: any, label: string): boolean {
    const valorCarro = carro.preco;
  
    if (label === 'Até R$70.000') {
      return valorCarro <= 70000;
    } else if (label === 'Até R$100.000') {
      return valorCarro <= 100000;
    } else if (label === 'Até R$120.000') {
      return valorCarro <= 120000;
    } else if (label === 'Mais de R$120.000') {
      return valorCarro > 120000;
    }
  
    return true; // Caso o rótulo não corresponda a nenhum valor selecionado, retorna true
  }


  verificaCategoria(carroCategoria: string){
    for(let categoria of this.categorias){
        if(categoria.checked && categoria.label == carroCategoria){
          return true
        }
    }
    return false;
  }


  verificaFiltroCategoriaSelecionado():boolean{

    for(let categoria of this.categorias){
      if(categoria.checked){
        return true
      }
    }
    return false;
  } 

}

