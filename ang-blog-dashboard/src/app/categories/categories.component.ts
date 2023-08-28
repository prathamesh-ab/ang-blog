import { Component } from '@angular/core';
import { FormControl, FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(){}

  // obj:object = {};
  arr:Array<any> = [];

  pushValue(f: FormControl){
    
    this.arr.push(f);
    console.log(f);
    
  }

 
}
