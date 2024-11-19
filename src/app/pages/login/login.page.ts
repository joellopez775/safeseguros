import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = ''; // Almacena el correo ingresado
  password: string = ''; // Almacena la contraseña ingresada

  constructor(
    private authService: AuthService, // Servicio de autenticación
    private router: Router, // Navegación entre páginas
    private alertController: AlertController // Alertas para mensajes al usuario
  ) {}

  // Método para iniciar sesión
  async login() {
    try {
      await this.authService.login(this.email, this.password); // Llama al servicio de autenticación
      this.router.navigate(['/home']); // Redirige a la página principal tras el inicio exitoso
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.showAlert('Error', 'Correo o contraseña incorrectos. Inténtalo nuevamente.');
    }
  }

  // Método para mostrar una alerta
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}