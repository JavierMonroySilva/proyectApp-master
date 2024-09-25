import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    // Guardar los datos del usuario en el localStorage
    const user = {
      email: this.email,
      password: this.password,
    };
    localStorage.setItem('user', JSON.stringify(user)); // Guardar el usuario registrado como JSON en localStorage

    alert('Registro exitoso');
    // Redirigir al Login después del registro exitoso
    this.router.navigateByUrl('/login');
  }
}
