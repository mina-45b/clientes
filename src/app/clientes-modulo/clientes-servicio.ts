import { Injectable } from '@angular/core';

//Observable
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientesServicio {
  
  private clientes: any[] = [];
  private clientesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.clientes);

  constructor() {}

    //Metodos para gestionar clientes

  crearCliente(clienteDatos: any): void {
    const nuevoCliente = { id: this.clientes.length + 1, ...clienteDatos };
    this.clientes.push(nuevoCliente);
    this.clientesSubject.next([...this.clientes]);

    console.warn("el cliente fue creado", nuevoCliente);
    

  

  }
    
}
