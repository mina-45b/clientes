import { TestBed } from '@angular/core/testing';

import { ClientesServicio } from './clientes-servicio';

//modelo
import { Cliente } from './cliente.model';

describe('ClientesServicio', () => {
  let service: ClientesServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesServicio);
  });

  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });

  //Prueba cliente

  it('debería crear un cliente y emitirlo en el observable', (done) =>{
    const datosCliente = {
      nombre:'Ana', 
      direccion:'C. del Banus', 
      email:'ana@test.com'
    };

    service.getCliente().subscribe(clientes => {
      if(clientes.length > 0) {
        expect(clientes[0].id).toBe(1);
        expect(clientes[0].nombre).toBe('Ana')
        expect(clientes[0].direccion).toBe('C. del Banus')
        expect(clientes[0].email).toBe('ana@test.com');
        done();
      }
    });

    service.crearCliente(datosCliente)
  })

});
