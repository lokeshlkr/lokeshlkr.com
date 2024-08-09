import { Component, signal } from '@angular/core';
import { FancyInputComponent } from "../../01_ui/fancy-input/fancy-input.component";
import { isValidHexColor } from '../../10_utility/functions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tiar-settings',
  standalone: true,
  imports: [FancyInputComponent, RouterLink],
  templateUrl: './settings.component.html',
  styles: ``
})
export class SettingsComponent {

  name = signal(localStorage.getItem("playerName") || "");
  color = signal(localStorage.getItem("playerColor") || "#004578")

  constructor() { }

  validateName() {
    if (this.name().length === 0) {
      return "Name cannot be empty"
    }
    if (this.name().length < 3) {
      return "Name must have atleast 3 characters"
    }
    return ""
  }
  validateColor() {
    if (!isValidHexColor(this.color())) {
      return "Please provide a valid hex color."
    }
    return ""
  }
  onSubmit(e: Event) {
    e.preventDefault();
    console.log("Form Submitted");

  }

}
