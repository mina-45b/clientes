import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { CrearCliente } from './crear-cliente/crear-cliente';
import { ListaDeClientes } from './lista-de-clientes/lista-de-clientes';

const routes: Routes = [

  {path: 'crear-cliente', component: CrearCliente},
  {path: 'lista-de-clientes', component: ListaDeClientes},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ClientesModuloRoutingModule { }
