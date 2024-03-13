import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  mySnap!:FaceSnap;
  mySecSnap!:FaceSnap;
  myThirdSnap!:FaceSnap;

  ngOnInit(){
    this.mySnap = {
      title: 'Archimoche',
      description: 'Mon ennemi',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate:new Date(),
      snaps:0,
      location : "Paris"
    };
    this.mySecSnap = {
      title: 'Angels',
      description:'Vraiment une caricature de gentil !',
      imageUrl:'https://cdn.pixabay.com/photo/2021/08/16/11/32/girl-6550158_1280.png',
      createdDate:new Date(),
      snaps:0,
      location: "La plage"
    };
    this.myThirdSnap = {
      title:'Yanis Ninja',
      description: 'Vraiment le meilleur des développeurs !',
      imageUrl:'https://cdn.pixabay.com/photo/2023/09/02/14/48/ai-generated-8229038_1280.png',
      createdDate:new Date(),
      snaps:0,

    };
  }
}
