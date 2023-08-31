import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  permalink:string = '';
  imgSrc:any = '../../../assets/placeholder-image.jpg'; 
  selectedImg:any = '';

  onTitleChanged($event: any){
 
    // console.log($event.target.value);
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g,'-');
    // console.log(this.permalink);
    
  }

  showPreview($event:any){

    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target?.result;
    }

    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }
}
