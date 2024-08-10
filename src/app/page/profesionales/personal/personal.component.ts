import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvsService } from '../cvs.service';
import { Person } from './personal.interface';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  standalone: true,
})
export class PersonalComponent implements OnInit {
  id: string | null = null;
  selectedCv: Person | null = null;
  cvData: Person[] = [
    {
      id: 1,
      nombre: 'David Enrique ',
      apellidos: 'Mendoza Gutierrez',
      email: 'David.enrique.mendoza.g@gmail.com',
      telefono: '60860545',
      carrera: 'Ingeniero Informatico',
      descripcion:
        '• Aprendo rápido, Orden y disciplina en el trabajo, Habilidad para trabajar en equipo, Amable con las personas, Paciente y Responsable, Manejo de Inteligencia emocional',
      image: 'assets/img/DavidMendoza.jpeg',
      tecnologias:
        'Maestría en Seguridad de la Información y Tecnologías de la Información',
      universidad: 'Universidad Autónoma Gabriel René Moreno',
    },
    {
      id: 2,
      nombre: 'Fabiola',
      apellidos: 'Rojas Janco',
      email: 'rojasjanco85@gmail.com',
      telefono: '63316992',
      universidad: 'Aquino Bolivia - UDABOL',
      carrera: 'Ingeniería en sistemas',
      tecnologias: 'Redes sociales',
      descripcion: 'Trabajar en grupo..',
      image: 'assets/img/FabiolaRojas.jpeg',
    },
    {
      id: 3,
      nombre: 'Jaime',
      apellidos: 'Quispe Jimenez',
      email: 'jaime.sistemas@gmail.com',
      telefono: '69283202',
      universidad: 'UDABOL',
      carrera: 'Ingeniería de sistemas',
      tecnologias: 'Desarrollador Web',
      descripcion: 'Programar y Jugar Video Juegos',
      image: 'assets/img/R.jpg',
    },
    {
      id: 4,
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
      nombre: 'Jose Julian',
      apellidos: 'Sarabia Roque',
      email: 'josejuliansarabiaroque1@gmail.com',
      telefono: '63551198',
      universidad: 'udabol',
      carrera: 'ING SISTEMA',
      tecnologias: '',
      descripcion: '',
      image: 'assets/img/R.jpg',
    },
    {
      id: 6,
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
      id: 7,
      nombre: 'Jean Pierre',
      apellidos: 'Guzmán Terrazas',
      email: 'jpgt755@gmail.com',
      telefono: '62102525',
      universidad: 'Udabol',
      carrera: 'Ingeniería en Sistemas',
      tecnologias:
        'Programación (c#, sql) Programación web(html, css, php, js, bootstrap, Laravel, laragon, xampp)',
      descripcion:
        'Soy una persona analítica y orientada a resultados, con una fuerte capacidad para resolver problemas y optimizar procesos. Me motiva el desafío de encontrar soluciones eficientes y efectivas. Disfruto trabajando en equipo y compartiendo conocimientos para alcanzar objetivos. En mis tiempos libres me gusta explorar nuevas tecnologías y programar proyectos personales como software o sitios web. También soy aficionado al fútbol y calistenia para mantenerme bien físicamente y con buena salud. En cuanto a pasatiempos, disfruto viajar al campo y conocer nuevos lugares y ciudades.',
      image: 'assets/img/R.jpg',
    },
    {
      id: 8,
      nombre: 'Najai',
      apellidos: 'Sossa Bernal',
      email: 'najaisosa123@gmail.com',
      telefono: '63577413',
      universidad: 'Universidad de Aquino Bolivia',
      carrera: 'Ingeniería de Sistemas',
      tecnologias: '',
      descripcion:
        'Soy una ingeniera de sistemas con una pasión por la tecnología y el arte. Disfruto dibujar y leer novelas, fanfics, anime y manga. Amo la música variada, especialmente Shakira, Morat e Imagine Dragons, y tengo un interés especial en la música clásica, tanto extranjera como latina. Soy la menor de mis hermanos, y aunque soy reservada y no muy sociable, valoro la honestidad y la integridad. Los perros son mis compañeros favoritos, y disfruto de la compañía de los gatos. Busco siempre mejorar mis habilidades y enfrentar nuevos desafíos.',
      image: 'assets/img/NajaiSossa.jpeg',
    },
    {
      id: 9,
      nombre: 'Carlos Jhordan',
      apellidos: 'Ortega Mamani',
      email: 'ortegajhordan51@gmail.com',
      telefono: '77061485',
      universidad: 'UDABOL',
      carrera: 'ING. Sistemas',
      tecnologias:
        'Desarrollo web en el entorno de visual studio y visual studio code, IA convulsionales.',
      descripcion: 'Soy hiperactivo y pasatiempo es el volleyball',
      image: 'assets/img/R.jpg',
    },
    {
      id: 10,
      nombre: 'Keneth Sebastian',
      apellidos: 'Ayo Alarcon',
      email: 'kenethayo@gmail.com',
      telefono: '61512831',
      universidad: 'Udabol',
      carrera: 'Ingeniería de Sistemas',
      tecnologias: 'GitHub',
      descripcion: 'Jugar videojuegos, frontón, gym',
      image: 'assets/img/R.jpg',
    },
    {
      id: 11,
      nombre: 'Jose Carlos',
      apellidos: 'Apala Mamani',
      email: 'josecarlosapalamamani@gmail.com',
      carrera: 'Ingeniera de Sistemas',
      descripcion: 'Me gusta jugar futbol, e ir a pescar toda la noche',
      tecnologias: 'C#, Angular, Flutter, Nestjs, Nodejs, Mysql',
      telefono: '72909736',
      universidad: 'udabol',
      image: 'assets/img/CarlosApala.png',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la URL
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');

      this.loadCvData();
      // Puedes usar el id para hacer una solicitud a un servicio, etc.
    });
  }
  loadCvData() {
    // Filtrar el CV correspondiente al 'id' obtenido
    if (this.id) {
      const cvId = parseInt(this.id, 10);
      this.selectedCv =
        this.cvData.find((cv: { id: number }) => cv.id === cvId) || null;
    }
  }
}
