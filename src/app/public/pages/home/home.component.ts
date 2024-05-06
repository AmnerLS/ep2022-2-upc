import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FoodTrucksService} from "../../../owners/services/food-trucks.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foodTrucksCount: any;
  constructor(private foodTruckService: FoodTrucksService) {
  }
  private getAllFoodTrucks() {
    this.foodTruckService.getAll().subscribe((response:any)=>{
      this.foodTrucksCount = response.length;
    })
  }


  ngOnInit() {
    this.getAllFoodTrucks();
  }
}
