import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css'],
  standalone: true,
})
export class ProfesionalesComponent implements OnInit {
  professionals = [
    {
      id: 1,
      name: 'Carlos Jhordan Ortega Mamani',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para Carlos Jhordan Ortega Mamani.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/1',
    },
    {
      id: 2,
      name: 'Fabiola Rojas Janco',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para Fabiola Rojas Janco.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/2',
    },
    {
      id: 3,
      name: 'José Carlos Apala Mamani',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para José Carlos Apala Mamani.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/3',
    },
    {
      id: 4,
      name: 'Jose Julian Sarabia Roque',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para Jose Julian Sarabia Roque.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/4',
    },
    {
      id: 5,
      name: 'Alexander Justiniano Aranibar',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para Alexander Justiniano Aranibar.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/5',
    },
    {
      id: 6,
      name: 'Jean Pierre Guzmán Terrazas',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para Jean Pierre Guzmán Terrazas.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/6',
    },
    {
      id: 7,
      name: 'Omar Acero Huanca',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para Omar Acero Huanca.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/7',
    },
    {
      id: 8,
      name: 'Najai Sossa Bernal',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para Najai Sossa Bernal.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/8',
    },
    {
      id: 9,
      name: 'Keneth Sebastian Ayo Alarcon',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para Keneth Sebastian Ayo Alarcon.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/9',
    },
    {
      id: 10,
      name: 'Andru Fernando Rospilloso',
      degree: 'Licenciatura en Ciencias de la Computación', // Ajusta según el título real
      description: 'Descripción para Andru Fernando Rospilloso.',
      imageUrl: './assets/img/R.jpg',
      link: 'detail/10',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
