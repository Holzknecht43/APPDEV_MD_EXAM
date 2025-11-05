import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City } from '../services/city';

@Component({
  selector: 'app-saved-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-cities.html',
  styleUrl: './saved-cities.css'
})
export class SavedCities {
  cities: any[] = [];

  constructor(private cityService: City) {}

  ngOnInit() {
    this.cities = this.cityService.getCities();
  }

  removeCity(name: string) {
    this.cityService.removeCity(name);
    this.cities = this.cityService.getCities(); // Refresh list
  }
}
