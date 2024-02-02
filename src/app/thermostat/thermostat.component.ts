import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrl: './thermostat.component.css'
})
export class ThermostatComponent implements OnInit{
  @Input() min: number = 10;
  @Input() max: number = 40;
  @Input() value: number = 15; // Valore iniziale dello slider

  get targetAngle() {
    // Converte il valore dello slider in un angolo
    return 225 + (this.value / this.max) * 270;
  }

  constructor() {}

  ngOnInit() {
    // The target temperature shouldn't be major than max.
    if (this.value > this.max) {
      this.value = this.max;
    }

    // The target temperature shouldn't be minor than min.
    if (this.value < this.min) {
      this.value = this.min;
    }

    // The min value shouldn't be minor than 0.
    if (this.min < 0) {
      this.min = 0;
    }
  }
}
