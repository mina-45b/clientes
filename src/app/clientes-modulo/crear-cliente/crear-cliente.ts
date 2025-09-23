import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

//Librerias
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Libreria de formularios
import { ReactiveFormsModule } from '@angular/forms';

//Servicio
import { ClientesServicio } from '../clientes-servicio';

@Component({
  selector: 'app-crear-cliente',
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './crear-cliente.html',
  styleUrl: './crear-cliente.css'
})

export class CrearCliente implements OnInit {

  clientForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientesServicio : ClientesServicio
  ){}

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  crearCliente(datos: any) {
    this.clientesServicio.crearCliente(datos);
    console.log('cliente creado', datos)
    this.clientForm.reset();
    

  }

}
