import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeClientes } from './lista-de-clientes';

describe('ListaDeClientes', () => {
  let component: ListaDeClientes;
  let fixture: ComponentFixture<ListaDeClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeClientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeClientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
