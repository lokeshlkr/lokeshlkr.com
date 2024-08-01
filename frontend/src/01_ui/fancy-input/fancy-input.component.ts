import { Component, input } from '@angular/core';

@Component({
  selector: 'tiar-fancy-input',
  standalone: true,
  imports: [],
  templateUrl: './fancy-input.component.html',
  styles: ``
})
export class FancyInputComponent {

  id = input.required<string>();
  label = input.required<string>();
  error = input<string>();
  type = input<string>();
  placeholder = input<string>();

}
