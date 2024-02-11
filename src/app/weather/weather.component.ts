import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [ApixuService],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  public weatherData: any;
  public weatherSearchForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private apixuService: ApixuService) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues:any) {
    this.apixuService
    .getWeather(formValues.location)
    .subscribe(data => this.weatherData = data)
      console.log(this.weatherData);
  }
}
