import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrl: './snap-face.component.scss',
  
})
export class SnapFaceComponent implements OnInit{
  title!: string;
  description!:string;
  createdDate!:Date;
  snaps!:number;
  imageUrl!: string; 

ngOnInit(){
  this.title = 'Archibald';
  this.description = 'Mon meilleur ami depuis toujours'
  this.createdDate = new Date();
  this.snaps = 6;
  this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  
}  

onAddSnap(){
  this.snaps ++;
}

}
