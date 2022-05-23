import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
                  Welcome {{name}}
                </h2>
                
                <!--using property binding -->
               <input type="text" name="name" [id]="myId" value="atar matar tamatar vishal" />

               <!--using interpolation-->
               <input type="text" [disabled]="isDisabled" name="name" id= {{myId}} value="atar  vishal" />
              
               <h2 class="text_success">
                 Anant Sinha
               </h2>
               <h2 [class]="text" >
                 Vishal Dixit
               </h2>

               <h2 [class]="text" class="text_success">
                 Vishal Dixit
               </h2>
               
              `,
  styles: [`.text_success{
                 color:red; 
            }
            .text-body{
              color:blue;
            }
            `]
})


export class TestComponent implements OnInit {

  public name = "Vishal";
  public myId = "testid" ;
  public isDisabled = true;
  public text = "text-body";

  constructor() { }

  ngOnInit(): void {
  }

}
