import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isValidHexColor } from '../../10_utility/functions';

@Component({
  selector: 'tiar-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fancy-input.component.html',
  styles: ``,
  animations: [
    trigger("errorAnimation", [
      transition(":enter", [
        style({ "transform": "translateY(-2em)", "opacity": "0" }),
        animate("150ms ease-in-out",
          style({ "transform": "translateY(0)", "opacity": "1" }))
      ]),
      transition(":leave", [
        style({ "transform": "translateX(0)", "opacity": "1" }),
        animate("150ms ease-in-out", style({ "transform": "translateX(120%)", "opcacity": "0" }))
      ]),
    ])
  ]
})
export class FancyInputComponent {
  type = input<string>();
  id = input.required<string>();
  label = input.required<string>();
  validator = input<() => string>();
  error = signal("");


  value = input.required<string>();
  valueChange = output<string>();

  currentValue = signal("")

  touched = signal(false);
  dirty = signal(false);

  valueChanged(v: string) {
    this.dirty.set(true);
    this.valueChange.emit(v);
    this.currentValue.set(v);
  }



}
