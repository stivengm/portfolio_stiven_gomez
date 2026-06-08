import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Presentation } from '../../shared/presentation/presentation';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Presentation,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
