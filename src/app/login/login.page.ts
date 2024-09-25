import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = 'javier@gmail.com';
  password: string = 'monroy123';

  constructor(private router: Router) {}

  login() {
    // Obtener el usuario registrado del localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser); // Parsear el JSON guardado en localStorage
      // Validar las credenciales
      if (this.email === user.email && this.password === user.password) {
        // Guardar un token de autenticación en el localStorage
        localStorage.setItem('access_token', 'my-token');
        // Redirigir al Home
        this.router.navigateByUrl('/home');
      } else {
        alert('Credenciales incorrectas');
      }
    } else {
      alert('No se encontró ninguna cuenta registrada');
    }
  }
}


