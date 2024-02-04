import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrl: './thermostat.component.css'
})
export class ThermostatComponent implements OnInit{
  @Input() min: number = 0;
  @Input() max: number = 50;
  @Input() value: number = 10; // Default thermostat value

  get targetAngle() {
    // Converts the value into angle
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
