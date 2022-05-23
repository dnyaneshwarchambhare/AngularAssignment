import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurantForm = new FormGroup({
    resName : new FormControl('Moms kitchen'),
    resLoc : new FormControl('Nagpur'),
    resId : new FormControl('1001')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
