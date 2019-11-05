import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'has-pizzaria',
  templateUrl: './pizzaria.component.html',
  styleUrls: ['./pizzaria.component.css']
})
export class PizzariaComponent implements OnInit {
  formComanda: FormGroup;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
      this.formComanda = this.formBuilder.group({
        TaxaServico: this.formBuilder.control(true),
        inChopp : this.formBuilder.control(''),
        inPessoas : this.formBuilder.control(''),
        inPizza : this.formBuilder.control(''),
        inRecheio : this.formBuilder.control('')
      })
  }
  onProcessar(){
   let vlChopp:number = this.formComanda.value.inChopp *7.30;
   let vlPizza:number = this.formComanda.value.inPizza *31.50;
   let vlRecheio:number = this.formComanda.value.inRecheio *5.90;
   let tlPessoas:number = this.formComanda.value.inPessoas;
   let vlTotal: number = (vlChopp + vlPizza + vlRecheio) / tlPessoas;
   let vlConsumo: number = (vlChopp + vlPizza + vlRecheio);
   let TaxaServico:boolean = this.formComanda.value.TaxaServico;
   let vlTaxa_de_Servico:number = vlConsumo  *0.1;
   let vlTotalTaxa: number = (vlChopp + vlPizza + vlRecheio + vlTaxa_de_Servico);
   let vlTotalPessoa: number = (vlChopp + vlPizza + vlRecheio + vlTaxa_de_Servico) / tlPessoas;    
   
  if(TaxaServico  )
  {
    alert("Consumo :" + vlConsumo.toFixed(2) +
    "\n Serviços :" + vlTaxa_de_Servico.toFixed(2) +
    "\n Total :" + vlTotalTaxa.toFixed(2) + 
    "\n Por Pessoa :" + vlTotalPessoa.toFixed(2));
  }
  else{
    // alert("Valor Total :" + vlTotal);

    alert("Consumo :" + vlConsumo.toFixed(2)); 
 
  
  }
  }
}
