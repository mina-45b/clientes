import { Routes } from '@angular/router';

export const routes: Routes = [

    //Ruta del modulo clientes en carga perezosa
    {path: 'clientes', 
        loadChildren: () => import('./clientes-modulo/clientes-modulo-module').then(m => m.ClientesModuloModule)
    }

];
