import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
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

  constructor() {}

  logoUrl = './assets/img/new_logo.jpg';
}
