export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
}

export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  graduationYear: string;
}

export interface Certification {
  title: string;
  institution: string;
  year: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface CV {
  id: number;
  name: string;
  contact: Contact;
  profile: string;
  experience: Experience[];
  education: Education;
  skills: string[];
  certifications: Certification[];
  languages: Language[];
}
