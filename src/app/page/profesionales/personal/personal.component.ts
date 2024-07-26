import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvsService } from '../cvs.service';
import { CV } from './personal.interface';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  standalone: true,
})
export class PersonalComponent implements OnInit {
  id: string | null = null;
  selectedCv: CV | null = null;
  cvData: CV[] = [
    {
      id: 1,
      name: 'Carlos Jhordan Ortega Mamani',
      contact: {
        email: 'carlos.ortega@ejemplo.com',
        phone: '123-456-7890',
        linkedin: 'linkedin.com/in/carlosjhordan',
      },
      profile: 'Descripción para Carlos Jhordan Ortega Mamani.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
    },
    {
      id: 2,
      name: 'Fabiola Rojas Janco',
      contact: {
        email: 'fabiola.rojas@ejemplo.com',
        phone: '234-567-8901',
        linkedin: 'linkedin.com/in/fabiolarojas',
      },
      profile: 'Descripción para Fabiola Rojas Janco.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
    },
    {
      id: 3,
      name: 'José Carlos Apala Mamani',
      contact: {
        email: 'jose.apala@ejemplo.com',
        phone: '345-678-9012',
        linkedin: 'linkedin.com/in/josecarlosapala',
      },
      profile: 'Descripción para José Carlos Apala Mamani.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
    },
    {
      id: 4,
      name: 'Jose Julian Sarabia Roque',
      contact: {
        email: 'jose.sarabia@ejemplo.com',
        phone: '456-789-0123',
        linkedin: 'linkedin.com/in/josejuliansarabia',
      },
      profile: 'Descripción para Jose Julian Sarabia Roque.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
    },
    {
      id: 5,
      name: 'Alexander Justiniano Aranibar',
      contact: {
        email: 'alexander.aranibar@ejemplo.com',
        phone: '567-890-1234',
        linkedin: 'linkedin.com/in/alexanderjustiniano',
      },
      profile: 'Descripción para Alexander Justiniano Aranibar.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
    },
    {
      id: 6,
      name: 'Jean Pierre Guzmán Terrazas',
      contact: {
        email: 'jean.guzman@ejemplo.com',
        phone: '678-901-2345',
        linkedin: 'linkedin.com/in/jeanpierre',
      },
      profile: 'Descripción para Jean Pierre Guzmán Terrazas.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
    },
    {
      id: 7,
      name: 'Omar Acero Huanca',
      contact: {
        email: 'omar.acero@ejemplo.com',
        phone: '789-012-3456',
        linkedin: 'linkedin.com/in/omaracero',
      },
      profile: 'Descripción para Omar Acero Huanca.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
    },
    {
      id: 8,
      name: 'Najai Sossa Bernal',
      contact: {
        email: 'najai.sossa@ejemplo.com',
        phone: '890-123-4567',
        linkedin: 'linkedin.com/in/najaisossa',
      },
      profile: 'Descripción para Najai Sossa Bernal.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
    },
    {
      id: 9,
      name: 'Keneth Sebastian Ayo Alarcon',
      contact: {
        email: 'keneth.ayo@ejemplo.com',
        phone: '901-234-5678',
        linkedin: 'linkedin.com/in/kenethayo',
      },
      profile: 'Descripción para Keneth Sebastian Ayo Alarcon.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
    },
    {
      id: 10,
      name: 'Andru Fernando Rospilloso',
      contact: {
        email: 'andru.rospilloso@ejemplo.com',
        phone: '012-345-6789',
        linkedin: 'linkedin.com/in/andrurospilloso',
      },
      profile: 'Descripción para Andru Fernando Rospilloso.',
      experience: [],
      education: {
        degree: 'Licenciatura en Ciencias de la Computación',
        institution: 'Universidad Ejemplo',
        graduationYear: '2020',
      },
      skills: [],
      certifications: [],
      languages: [],
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
