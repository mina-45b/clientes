import { Injectable } from '@angular/core';

//Observable
import { BehaviorSubject, Observable } from 'rxjs';

//Interfaz
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesServicio {
  
  private clientes: Cliente[] = [];
  private clientesSubject: BehaviorSubject<Cliente[]> = new BehaviorSubject<any[]>(this.clientes);

  constructor() {}

    //Metodos para gestionar clientes

    //Omit<T, K> Tengo todo de cliente menos el Id
  crearCliente(clienteDatos: Omit<Cliente, 'id'>): void {
    const nuevoCliente = { 
      id: this.clientes.length + 1,
      ...clienteDatos 
    };
    this.clientes.push(nuevoCliente);
    this.clientesSubject.next([...this.clientes]);

    console.warn("el cliente fue creado", nuevoCliente);
  }
  
  getCliente(): Observable<Cliente[]> {
    return this.clientesSubject.asObservable();
  }


}
