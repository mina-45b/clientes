import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Enrutamiento
import { ClientesModuloRoutingModule } from './clientes-modulo-routing-module';

//Componentes
import { CrearCliente } from './crear-cliente/crear-cliente';
import { ListaDeClientes } from './lista-de-clientes/lista-de-clientes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientesModuloRoutingModule,
    CrearCliente,
    ListaDeClientes
  ]
})
export class ClientesModuloModule { }
