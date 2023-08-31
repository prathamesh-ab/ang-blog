import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  constructor(private categoryService: CategoriesService){}

  categoryArray?: Array<any>;
  
  // Variable for Two-way Data binding
  formCategory:string = "";
  formStatus:string = "Add";
  categoryId:string = "";

  onSubmit(formData:NgForm){

    let categoryData: Category = {
      category : formData.value.category
    }

    if(this.formStatus == 'Add'){
      this.categoryService.saveData(categoryData);
      formData.reset();
    }else if(this.formStatus == 'Edit'){
      this.categoryService.updateData(this.categoryId,categoryData);
      this.formStatus = 'Add';
    }
    
  }

  ngOnInit(): void {
      this.categoryService.loadData().subscribe(val => {
        console.log(val); 
        this.categoryArray = val;  
      })
  }   

  onEdit(categoryForm: string,categoryId: string){
    // console.log(category);
    this.formCategory = categoryForm;
    this.formStatus =  "Edit";
    this.categoryId = categoryId;
  }

  onDelete(categoryId: string){
    this.categoryService.deleteData(categoryId);
  }

    // let subCategoryData = {
    //   subCategory: 'subCategory1'
    // }

    // let subCategoryData1 = {
    //   subCategory: 'subCategory2'
    // }
    // // console.log(categoryData);
    // // console.log(formData);
    
    // this.afs.collection('categories').add(categoryData).then(docRef => {
    //   console.log(docRef);

    //   this.afs.doc(`categories/${docRef.id}`).collection('subcategories').add(subCategoryData).then(docRef1 => {



    //   // this.afs.collection('categories').doc(docRef.id).collection('subcategories').add(subCategoryData).then(docRef1 => {
    //   //   console.log(docRef1);

    //     this.afs.doc(`categories/${docRef}/subcategories/${docRef1}`).collection('subsubcategories').add(subCategoryData1).then(docRef2 => {
    //       console.log(docRef2);

    //     })

    //     // this.afs.collection('categories').doc(docRef.id).collection('subcategories').doc(docRef1.id).collection('subsubcategories').add(subCategoryData1).then(docRef2 => {
    //     //   console.log(docRef2);
    //     // })
    //   })
    // })

    // .catch(err => {
    //   console.log(err);
    // })
    
  }

