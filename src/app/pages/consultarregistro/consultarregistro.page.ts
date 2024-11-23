import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultarregistro',
  templateUrl: './consultarregistro.page.html',
  styleUrls: ['./consultarregistro.page.scss'],
})
export class ConsultarRegistroPage {
  rut: string = ''; // Variable para almacenar el RUT ingresado

  constructor(private router: Router) {}

  // Función para validar el RUT
  validarRut(rut: string): boolean {
    const rutRegex = /^[0-9]+-[0-9kK]{1}$/; // Valida formato básico 12345678-9
    return rutRegex.test(rut);
  }

  // Función para consultar el RUT
  consultarRut(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    if (this.rut.trim() === '') {
      alert('Por favor, ingrese un RUT válido');
      return;
    }

    if (!this.validarRut(this.rut)) {
      alert('El formato del RUT es inválido. Ejemplo: 12345678-9');
      return;
    }

    // Navegar a la ruta definida en el enrutador, pasando el RUT como parámetro
    this.router.navigate(['/resultado-rut'], { queryParams: { rut: this.rut } });
  }
}