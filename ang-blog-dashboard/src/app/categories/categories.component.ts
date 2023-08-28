import { Component } from '@angular/core';
import { FormControl, FormsModule, NgForm }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private afs: AngularFirestore){}

  // obj:object = {};
  arr:Array<any> = [];

  pushValue(f: FormControl){
    
    this.arr.push(f);
    console.log(f);
    
  }

  onSubmit(formData:NgForm){
    let categoryData = {
      category : formData.value.category
    }
    // console.log(categoryData);
    // console.log(formData);
    
    this.afs.collection('categories').add(categoryData).then(docRef => {
      console.log(docRef);
    })
    .catch(err => {
      console.log(err);
    })
    
  }
}
