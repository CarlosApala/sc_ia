import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { ProfesionalesComponent } from '../profesionales/profesionales.component';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ProfesionalesComponent],
})
export class HomeComponent {
  private navbar!: HTMLElement;

  listIcon: String[] = [
    'assets/img/icon/chatgpt.svg',
    'assets/img/icon/copy.ai.svg',
    'assets/img/icon/ibm-watson.svg',
    'assets/img/icon/jasper-ai.svg',
    'assets/img/icon/microsoft-copilot.svg',
    'assets/img/icon/Midjourney.png',
    'assets/img/icon/power-bi1.svg',
  ];

  instructores = [
    {
      id: 1,
      name: 'David Enrique Mendoza Gutierrez',
      degree: 'Ingenieria Informatica',
      description:
        'El deporte y pescJugar Fútbol,Tocar Guitarra,Cantar,Cocinar',
      imageUrl: 'assets/img/DavidMendoza.jpeg',
      link: 'detail/1',
    },
    {
      id: 2,
      name: 'Fabiola Rojas Janco',
      degree: 'Ingeniería en Sistemas',
      description: 'Trabajar en grupo..',
      imageUrl: 'assets/img/FabiolaRojas.jpeg',
      link: 'detail/2',
    },
    {
      id: 3,
      name: 'Jaime Quispe Jimenez',
      degree: 'Ingeniería de Sistemas',
      description: 'Programar y Jugar Video Juegos',
      imageUrl: 'assets/img/R.jpg',
      link: 'detail/3',
    },
    {
      id: 4,
      name: 'Alexander Justiniano Aranibar',
      degree: 'Ing. De Sistemas',
      description:
        'Soy un joven dedicado a mi trabajo, a crear profesionalmente, me gusta leer, repasar lo aprendido',
      imageUrl: 'assets/img/R.jpg',
      link: 'detail/4',
    },
    {
      id: 5,
      name: 'Jose Julian Sarabia Roque',
      degree: 'ING SISTEMA',
      description: '',
      imageUrl: 'assets/img/R.jpg',
      link: 'detail/5',
    },
    {
      id: 6,
      name: 'Bertho Barrios Velarde',
      degree: 'Ing. Sistemas',
      description: 'Redes en proyectos FTTH y FTTR',
      imageUrl: 'assets/img/BertoBarrios.png',
      link: 'detail/6',
    },
    {
      id: 7,
      name: 'Jean Pierre Guzmán Terrazas',
      degree: 'Ingeniería en Sistemas',
      description:
        'Soy una persona analítica y orientada a resultados, con una fuerte capacidad para resolver problemas y optimizar procesos. Me motiva el desafío de encontrar soluciones eficientes y efectivas. Disfruto trabajando en equipo y compartiendo conocimientos para alcanzar objetivos. En mis tiempos libres me gusta explorar nuevas tecnologías y programar proyectos personales como software o sitios web. También soy aficionado al fútbol y calistenia para mantenerme bien físicamente y con buena salud. En cuanto a pasatiempos, disfruto viajar al campo y conocer nuevos lugares y ciudades.',
      imageUrl: 'assets/img/R.jpg',
      link: 'detail/7',
    },
    {
      id: 8,
      name: 'Najai Sossa Bernal',
      degree: 'Ingeniería de Sistemas',
      description:
        'Soy una ingeniera de sistemas con una pasión por la tecnología y el arte. Disfruto dibujar y leer novelas, fanfics, anime y manga. Amo la música variada, especialmente Shakira, Morat e Imagine Dragons, y tengo un interés especial en la música clásica, tanto extranjera como latina. Soy la menor de mis hermanos, y aunque soy reservada y no muy sociable, valoro la honestidad y la integridad. Los perros son mis compañeros favoritos, y disfruto de la compañía de los gatos. Busco siempre mejorar mis habilidades y enfrentar nuevos desafíos.',
      imageUrl: 'assets/img/NajaiSossa.jpeg',
      link: 'detail/8',
    },
    {
      id: 9,
      name: 'Carlos Jhordan Ortega Mamani',
      degree: 'Ingeniería de Sistemas',
      description: 'Soy hiperactivo y pasatiempo es el volleyball',
      imageUrl: 'assets/img/R.jpg',
      link: 'detail/9',
    },
    {
      id: 10,
      name: 'Keneth Sebastian Ayo Alarcon',
      degree: 'Ingeniería de Sistemas',
      description: 'Jugar videojuegos, frontón, gym',
      imageUrl: 'assets/img/R.jpg',
      link: 'detail/10',
    },
    {
      id: 11,
      name: 'Jose Carlos Apala M.',
      degree: 'Ingeniería de Sistemas',
      description: 'El deporte y pesca',
      imageUrl: 'assets/img/CarlosApala.png',
      link: 'detail/11',
    },
  ];

  images: String[] = [
    'assets/img/R.jpg',
    'assets/img/R.jpg',
    'assets/img/R.jpg',
    'assets/img/R.jpg',
    'assets/img/R.jpg',
    'assets/img/R.jpg',
    'assets/img/R.jpg',
    'assets/img/R.jpg',
    'assets/img/R.jpg',
    'assets/img/R.jpg',
    'assets/img/R.jpg',
  ];

  logoUrl = './assets/img/new_logo.jpg';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  infiniteItems: String[] = [];

  ngOnInit(): void {
    this.createInfiniteList();
  }

  createInfiniteList(): void {
    // Crear una lista infinita repetida
    this.infiniteItems = [...this.images, ...this.images];
  }
  /*
  ngOnInit() {
    this.startCarousel();
  } */

  /*
  private startCarousel() {
    const carousel = this.el.nativeElement.querySelector('.carousel');
    const itemWidth = 50; // Ancho de cada imagen
    const totalItems = this.images.length;
    const containerWidth = 250; // Ancho del contenedor (5 imágenes x 50px)
    let offset = 0;

    this.interval = setInterval(() => {
      offset -= itemWidth;
      if (Math.abs(offset) >= (totalItems - 5) * itemWidth) {
        offset = 0;
      }
      this.renderer.setStyle(carousel, 'transform', `translateX(${offset}px)`);
    }, 2000); // Ajusta el tiempo según tus necesidades
  } */
}
