import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuForm = new FormGroup({
    menuName : new FormControl('Kadhai Paneer'),
    menuId : new FormControl('101'),
    menuPrice : new FormControl('Rs. 200')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
