import { TestBed } from '@angular/core/testing';

import { ClientesServicio } from './clientes-servicio';

describe('ClientesServicio', () => {
  let service: ClientesServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
