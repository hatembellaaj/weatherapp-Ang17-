import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location:any){
      return this.http.get(
          'https://api.weatherapi.com/v1/current.json?key=cace4b09c0f541a5aab131456231903&q='+location+'&aqi=no'
      );
  }
}
