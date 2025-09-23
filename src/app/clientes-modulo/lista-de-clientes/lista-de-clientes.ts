import { Component, OnInit } from '@angular/core';

//Servicio
import { ClientesServicio  } from '../clientes-servicio';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-de-clientes',
  imports: [ CommonModule],
  templateUrl: './lista-de-clientes.html',
  styleUrl: './lista-de-clientes.css'
})
export class ListaDeClientes implements OnInit{

  clientes: any[]= []

  constructor(private clientesServicio: ClientesServicio){}

  ngOnInit(): void {

    this.clientesServicio.getCliente().subscribe(
      data => {
        this.clientes = data
        console.log(this.clientes)
      },
      error => {
        console.log('Hay un error con los clientes', error)
      }
    )
    
  }


}
