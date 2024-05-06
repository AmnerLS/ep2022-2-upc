import { Component } from '@angular/core';
import {FormNewFoodTruckComponent} from "../../components/form-new-food-truck/form-new-food-truck.component";

@Component({
  selector: 'app-food-truck-management',
  standalone: true,
  imports: [
    FormNewFoodTruckComponent
  ],
  templateUrl: './food-truck-management.component.html',
  styleUrl: './food-truck-management.component.css'
})
export class FoodTruckManagementComponent {

}
