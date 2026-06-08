import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-project',
  imports: [],
  templateUrl: './item-project.html',
  styleUrl: './item-project.scss',
})
export class ItemProject {
  @Input() imgProject = "";
  @Input() titleProject = "";
  @Input() descriptionProject = "";


}
