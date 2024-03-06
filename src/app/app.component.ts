import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

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
    this.mySnap = new FaceSnap(
      'Archimoche',
      'Mon ennemi',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
    this.mySecSnap = new FaceSnap(
      'Angels',
      'Vraiment une caricature de gentil !',
      'https://cdn.pixabay.com/photo/2021/08/16/11/32/girl-6550158_1280.png',
      new Date(),
      0
    );
    this.myThirdSnap = new FaceSnap(
      'Yanis Ninja',
      'Vraiment le meilleur des développeurs !',
      'https://cdn.pixabay.com/photo/2023/09/02/14/48/ai-generated-8229038_1280.png',
      new Date(),
      0
    );
  }
}
