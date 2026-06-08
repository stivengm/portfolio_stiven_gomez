import { Component } from '@angular/core';
import { ItemProject } from '../item-project/item-project';

@Component({
  selector: 'app-projects',
  imports: [
    ItemProject
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
