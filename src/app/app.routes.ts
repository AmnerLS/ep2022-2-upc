import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {FoodTruckManagementComponent} from "./owners/pages/food-truck-management/food-truck-management.component";

export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path:'owners/food-trucks/new', component: FoodTruckManagementComponent},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path:'**',component: PageNotFoundComponent}
];
