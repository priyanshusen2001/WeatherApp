import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http:HttpClient) { }

    getWeather(city:string){
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a2d11e38afacf867e3bc03a59591d35b&units=metric');
    }

  }
