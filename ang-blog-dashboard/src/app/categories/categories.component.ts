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

    let subCategoryData = {
      subCategory: 'subCategory1'
    }

    let subCategoryData1 = {
      subCategory: 'subCategory2'
    }
    // console.log(categoryData);
    // console.log(formData);
    
    this.afs.collection('categories').add(categoryData).then(docRef => {
      console.log(docRef);

      this.afs.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategoryData).then(docRef1 => {

      

      // this.afs.collection('categories').doc(docRef.id).collection('subcategories').add(subCategoryData).then(docRef1 => {
      //   console.log(docRef1);

        this.afs.doc(`categories/${docRef}/subcategories/${docRef1}`).collection('subsubcategories').add(subCategoryData1).then(docRef2 => {
          console.log(docRef2);
          
        })

        // this.afs.collection('categories').doc(docRef.id).collection('subcategories').doc(docRef1.id).collection('subsubcategories').add(subCategoryData1).then(docRef2 => {
        //   console.log(docRef2);
        // })
      })
    })

    .catch(err => {
      console.log(err);
    })
    
  }
}
