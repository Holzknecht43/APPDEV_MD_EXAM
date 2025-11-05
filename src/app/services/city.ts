import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class City {
  private cities: any[] = [];

  addCity(city: any) {
    this.cities.push(city);
    localStorage.setItem('savedCities', JSON.stringify(this.cities));
  }

  getCities() {
    const saved = localStorage.getItem('savedCities');
    this.cities = saved ? JSON.parse(saved) : [];
    return this.cities;
  }

  removeCity(name: string) {
    this.cities = this.cities.filter(c => c.name !== name);
    localStorage.setItem('savedCities', JSON.stringify(this.cities));
  }
}
