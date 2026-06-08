import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Presentation } from '../../shared/presentation/presentation';
import { Contact } from '../../shared/contact/contact';
import { AboutMe } from '../../shared/about-me/about-me';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Presentation,
    AboutMe,
    Contact,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
