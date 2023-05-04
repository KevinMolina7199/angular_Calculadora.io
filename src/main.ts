import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./main.html`,
  styleUrls: ['./main.css'],
})
export class App {
  name = 'Kevin Molina';
  cargo = 'Estudiante';
  contador = 0;
  a = 0;
  b = 0;
  resultadoSuma = 0;
  resultadoResta = 0;
  resultadoMultiplicacion = 0;
  resultadoDiv = 0;
  calcularSuma() {
    console.log('Hola UPS');
    this.contador = this.contador + 1;

    this.resultadoSuma = +this.a + eval('' + this.b);
  }
  calcularResta() {
    console.log('Hola UPS');
    this.contador = this.contador + 1;

    this.resultadoResta = -this.b + eval('' + this.a);
  }

  calcularMultiplicacion() {
    console.log('Hola UPS');
    this.contador = this.contador + 1;

    this.resultadoMultiplicacion = this.a * this.b;
  }
  calcularDiv() {
    this.resultadoDiv = this.a / this.b;
  }

  // Resto del código de la calculadora
}

bootstrapApplication(App);
