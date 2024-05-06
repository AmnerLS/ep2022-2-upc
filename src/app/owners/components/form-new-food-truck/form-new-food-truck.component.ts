import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FoodTruck} from "../../model/food-truck.entity";
import {FoodTrucksService} from "../../services/food-trucks.service";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-form-new-food-truck',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, FormsModule, MatCardModule, RouterLink],
  templateUrl: './form-new-food-truck.component.html',
  styleUrl: './form-new-food-truck.component.css'
})
export class FormNewFoodTruckComponent {
  foodTruckData: FoodTruck;

  constructor(private foodTruckService: FoodTrucksService, private fb: FormBuilder) {
    this.foodTruckData = {} as FoodTruck;
  }

  createFoodTruck() {
    this.foodTruckData.id = 0;
    this.foodTruckService.create(this.foodTruckData).subscribe((response:any) => {
      console.log(response);
    });
  }

  clearForm() {
    this.foodTruckData = {} as FoodTruck;
  }

}
