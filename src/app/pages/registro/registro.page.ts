import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  email: string = ''; // Correo del usuario
  password: string = ''; // Contraseña del usuario
  confirmPassword: string = ''; // Confirmación de la contraseña

  constructor(
    private authService: AuthService, // Servicio de autenticación
    private router: Router, // Router para navegación
    private alertController: AlertController // Alertas para notificar al usuario
  ) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      this.showAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    try {
      // Llama al servicio de registro
      await this.authService.register(this.email, this.password);
      this.showAlert('Éxito', 'Registro completado correctamente.');
      this.router.navigate(['/login']); // Redirige a la página de login tras el registro
    } catch (error) {
      console.error('Error al registrarse:', error);
      this.showAlert('Error', 'Hubo un problema al registrarse. Verifica los datos.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}