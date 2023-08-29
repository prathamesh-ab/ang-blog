import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { ToastrService } from 'ngx-toastr/public_api';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private afs: AngularFirestore, private toastr: ToastrService) {}

  saveData(data:any){
    
    this.afs.collection('categories').add(data).then(docRef => {
      console.log(docRef);
      this.toastr.success("Data Inserted Successfully...");
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  loadData(){

    return this.afs.collection('categories').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {data,id};
        })
      })
    )

  }

  updateData(Id:string,EditData:any){

    // this.afs.collection('categories').doc(Id).update(EditData).then(docRef => {
    //   // console.log(docRef);
    //   this.toastr.success("Data Updated Successfully...");
    // })
    // .catch(err => {
    //   console.log(err);
    // })

    this.afs.doc(`categories/${Id}`).update(EditData).then(docRef => {
      // console.log(docRef);
      this.toastr.success("Data Updated Successfully...");
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  deleteData(Id:string){
    
    this.afs.doc(`categories/${Id}`).delete().then(docRef => {
      this.toastr.success("Data Deleted Successfully...");

    })
  }

}
