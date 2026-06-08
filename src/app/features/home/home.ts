import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Presentation } from '../../shared/presentation/presentation';
import { Contact } from '../../shared/contact/contact';
import { AboutMe } from '../../shared/about-me/about-me';
import { Projects } from '../../shared/projects/projects';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Presentation,
    Projects,
    AboutMe,
    Contact,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
