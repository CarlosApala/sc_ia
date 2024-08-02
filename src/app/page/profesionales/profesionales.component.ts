import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
      name: 'Fabiola Rojas Janco',
      degree: 'Ingeniería en Sistemas',
      description: 'Trabajar en grupo..',
      imageUrl: './assets/img/fabiola.jpg',
      link: 'detail/1',
    },
    {
      id: 2,
      name: 'Jaime Quispe Jimenez',
      degree: 'Ingeniería de Sistemas',
      description: 'Programar y Jugar Video Juegos',
      imageUrl: './assets/img/jaime.jpg',
      link: 'detail/2',
    },
    {
      id: 3,
      name: 'Alexander Justiniano Aranibar',
      degree: 'Ing. De Sistemas',
      description:
        'Soy un joven dedicado a mi trabajo, a crear profesionalmente, me gusta leer, repasar lo aprendido',
      imageUrl: './assets/img/alexander.jpg',
      link: 'detail/3',
    },
    {
      id: 4,
      name: 'Jose Julian Sarabia Roque',
      degree: 'ING SISTEMA',
      description: '',
      imageUrl: './assets/img/jose.jpg',
      link: 'detail/4',
    },
    {
      id: 5,
      name: 'Bertho Barrios Velarde',
      degree: 'Ing. Sistemas',
      description: 'Redes en proyectos FTTH y FTTR',
      imageUrl: './assets/img/bertho.jpg',
      link: 'detail/5',
    },
    {
      id: 6,
      name: 'Jean Pierre Guzmán Terrazas',
      degree: 'Ingeniería en Sistemas',
      description:
        'Soy una persona analítica y orientada a resultados, con una fuerte capacidad para resolver problemas y optimizar procesos. Me motiva el desafío de encontrar soluciones eficientes y efectivas. Disfruto trabajando en equipo y compartiendo conocimientos para alcanzar objetivos. En mis tiempos libres me gusta explorar nuevas tecnologías y programar proyectos personales como software o sitios web. También soy aficionado al fútbol y calistenia para mantenerme bien físicamente y con buena salud. En cuanto a pasatiempos, disfruto viajar al campo y conocer nuevos lugares y ciudades.',
      imageUrl: './assets/img/jean.jpg',
      link: 'detail/6',
    },
    {
      id: 7,
      name: 'Najai Sossa Bernal',
      degree: 'Ingeniería de Sistemas',
      description:
        'Soy una ingeniera de sistemas con una pasión por la tecnología y el arte. Disfruto dibujar y leer novelas, fanfics, anime y manga. Amo la música variada, especialmente Shakira, Morat e Imagine Dragons, y tengo un interés especial en la música clásica, tanto extranjera como latina. Soy la menor de mis hermanos, y aunque soy reservada y no muy sociable, valoro la honestidad y la integridad. Los perros son mis compañeros favoritos, y disfruto de la compañía de los gatos. Busco siempre mejorar mis habilidades y enfrentar nuevos desafíos.',
      imageUrl: './assets/img/najai.jpg',
      link: 'detail/7',
    },
    {
      id: 8,
      name: 'Carlos Jhordan Ortega Mamani',
      degree: 'Ingeniería de Sistemas',
      description: 'Soy hiperactivo y pasatiempo es el volleyball',
      imageUrl: './assets/img/carlos.jpg',
      link: 'detail/8',
    },
    {
      id: 9,
      name: 'Keneth Sebastian Ayo Alarcon',
      degree: 'Ingeniería de Sistemas',
      description: 'Jugar videojuegos, frontón, gym',
      imageUrl: './assets/img/keneth.jpg',
      link: 'detail/9',
    },
    {
      id: 10,
      name: 'Jose Carlos Apala M.',
      degree: 'Ingenieria de Sistemas',
      description: 'El deporte y pesca',
      imageUrl: './assets/img/josecarlos.jpg',
      link: 'detail/10',
    },
  ];

  private timer = 4000;
  private i = 0;
  private max: number | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const listItems = this.el.nativeElement.querySelectorAll('#c > li');
    this.max = listItems.length;

    this.setupInitialStates(listItems);
    setInterval(() => this.updateStates(listItems), this.timer);
  }

  private setupInitialStates(listItems: NodeListOf<Element>) {
    listItems[0].classList.add('active');
    this.renderer.setStyle(listItems[0], 'left', '0');
    if (listItems[1]) this.renderer.setStyle(listItems[1], 'left', '25%');
    if (listItems[2]) this.renderer.setStyle(listItems[2], 'left', '50%');
    if (listItems[3]) this.renderer.setStyle(listItems[3], 'left', '75%');
  }

  private updateStates(listItems: NodeListOf<Element>) {
    listItems.forEach((item) => item.classList.remove('active'));

    if (this.i < this.max! - 4) {
      this.i += 4;
    } else {
      this.i = 0;
    }

    listItems[this.i].classList.add('active');
    this.renderer.setStyle(listItems[this.i], 'left', '0');
    this.renderer.setStyle(listItems[this.i], 'transition-delay', '1.25s');

    if (listItems[this.i + 1]) {
      this.renderer.setStyle(listItems[this.i + 1], 'left', '25%');
      this.renderer.setStyle(listItems[this.i + 1], 'transition-delay', '1.5s');
    }

    if (listItems[this.i + 2]) {
      this.renderer.setStyle(listItems[this.i + 2], 'left', '50%');
      this.renderer.setStyle(
        listItems[this.i + 2],
        'transition-delay',
        '1.75s'
      );
    }

    if (listItems[this.i + 3]) {
      this.renderer.setStyle(listItems[this.i + 3], 'left', '75%');
      this.renderer.setStyle(listItems[this.i + 3], 'transition-delay', '2s');
    }
  }
}
