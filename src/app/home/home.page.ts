import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  isFirstTime: boolean = false;
  namaPemain: string = '';

  constructor() { }

  ngOnInit() {
    const namaTersimpan = localStorage.getItem('pemain_nama');

    if (namaTersimpan) {
      this.isFirstTime = false;
      this.namaPemain = namaTersimpan;
    } else {
      this.isFirstTime = true;
    }
  }
  simpanNama() {
    localStorage.setItem('pemain_nama', this.namaPemain);
    this.isFirstTime = false;
  }
}






