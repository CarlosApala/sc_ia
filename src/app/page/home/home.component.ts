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

  products = [
    {
      imgSrc: 'assets/img/new_logo.png',
      name: 'Name',
      subName: 'Sub Name',
      descriptionTitle: 'Name',
      description: 'Descriptions',
    },
    // Agrega más productos según sea necesario
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
