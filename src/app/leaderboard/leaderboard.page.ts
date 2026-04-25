import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
  standalone: false,
})
export class LeaderboardPage implements OnInit {

  daftarRanking: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadLeaderboard();
  }

  loadLeaderboard() {
    let dataLocal = localStorage.getItem('data_leaderboard') || '[]';

    if (dataLocal) {
      let dataArray = JSON.parse(dataLocal);

      this.daftarRanking = dataArray.sort((a: any, b: any) => b.skor - a.skor);
      this.daftarRanking = this.daftarRanking.slice(0, 10);
    } else {
      this.daftarRanking = [];
    }
  }

}
