import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Weather } from '../services/weather';
import { City } from '../services/city';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(
    private weatherService: Weather,
    private cityService: City
  ) {}

  getWeather() {
    this.weatherData = null;
    this.errorMessage = '';

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: () => {
        this.errorMessage = 'City not found or API error.';
      }
    });
  }

  saveCity() {
    if (!this.weatherData) return;

    const cityInfo = {
      name: this.weatherData.name,
      temp: this.weatherData.main.temp,
      desc: this.weatherData.weather[0].description
    };

    this.cityService.addCity(cityInfo);
    alert(`${this.weatherData.name} saved successfully!`);
  }
}
