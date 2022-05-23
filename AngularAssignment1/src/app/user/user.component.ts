import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = new FormGroup({
    uName : new FormControl('Vishal Dixit'),
    uMobile : new FormControl('880591406'),
    uAddress : new FormControl('Nagpur'),
    uEmail :  new FormControl('vishal@gmail.com')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
