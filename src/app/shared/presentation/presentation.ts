import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-presentation',
  imports: [],
  templateUrl: './presentation.html',
  styleUrl: './presentation.scss',
})
export class Presentation implements AfterViewInit {


  ngAfterViewInit(): void {
    new Typed('#typing', {
      strings: [
        'FullStack Developer',
        'Mobile Developer',
      ],

      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }
}
