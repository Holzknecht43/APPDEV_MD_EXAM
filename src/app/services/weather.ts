import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Weather {
  private apiKey = 'f451ff87ab2fd16d32b73cc139267256'; 
  private apiURL = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiURL}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
