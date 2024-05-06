import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {FoodTruck} from "../model/food-truck.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodTrucksService extends BaseService<FoodTruck> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/food-trucks';
  }

}
