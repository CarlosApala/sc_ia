import { Component } from '@angular/core';
import { Person } from '../profesionales/personal/personal.interface';

@Component({
  selector: 'app-creadores',
  standalone: true,
  imports: [],
  templateUrl: './creadores.component.html',
  styleUrl: './creadores.component.css',
})
export class CreadoresComponent {
  cvData: Person[] = [
    {
      id: 3,
      nombre: 'Alexander',
      apellidos: 'Justiniano Aranibar',
      email: 'yalex4006@gmail.com',
      telefono: '76371288',
      universidad: 'Udabol',
      carrera: 'Ing. De sistemas',
      tecnologias: 'C#, python, MySQL, SQL SERVER, html, css',
      descripcion:
        'Soy un joven dedicado a mi trabajo, a crear profesionalmente, me gusta leer, repasar lo aprendido',
      image: 'assets/img/R.jpg',
    },

    {
      id: 5,
      nombre: 'Bertho',
      apellidos: 'Barrios Velarde',
      email: 'bbvelarde1991@Gmail.com',
      telefono: '72784839',
      universidad: 'Universidad Aquino',
      carrera: 'Ing. Sistemas',
      tecnologias: 'Desarrollo Software, página web',
      descripcion: 'Redes en proyectos FTTH y FTTR',
      image: 'assets/img/BertoBarrios.png',
    },
    {
      id: 10,
      nombre: 'Jose Carlos',
      apellidos: 'Apala Mamani',
      email: 'josecarlosapalamamani@gmail.com',
      carrera: 'Ingeniera de Sistemas',
      descripcion: 'Me gustar jugar futbol, e ir a pescar toda la noche',
      tecnologias: 'C#, Angular, Flutter, Nestjs, Nodejs, Mysql',
      telefono: '72909736',
      universidad: 'udabol',
      image: 'assets/img/CarlosApala.png',
    },
  ];
}
