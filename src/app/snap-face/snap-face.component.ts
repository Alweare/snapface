import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrl: './snap-face.component.scss',
})
export class SnapFaceComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  txtSnap!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours';
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.txtSnap = 'Oh snap !';
  }

  onSnap() {
    if (this.faceSnap.snaps > 0) {
      this.txtSnap = 'Oh snap !';
      this.faceSnap.snaps--;
    } else {
      this.faceSnap.snaps++;
      this.txtSnap = 'Oops, unspap !';
    }
  }
}
