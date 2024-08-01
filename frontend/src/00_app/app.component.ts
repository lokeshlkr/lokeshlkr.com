import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconComponent } from '../01_ui/icon/icon.component';
import { FancyInputComponent } from "../01_ui/fancy-input/fancy-input.component";

@Component({
  selector: 'tiar-root',
  standalone: true,
  imports: [RouterOutlet, IconComponent, FancyInputComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'three-in-a-row';
  constructor() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.setTheme();
    });
    this.setTheme();
  }

  setTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector("html")?.classList.add("dark")
      document.querySelector("html")?.classList.remove("light")
    } else {
      document.querySelector("html")?.classList.add("light")
      document.querySelector("html")?.classList.remove("dark")
    }
  }
  validate(){
    
  }
}
