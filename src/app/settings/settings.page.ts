import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import type { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage implements OnInit {

  isAddPlayer: boolean = false;
  namaPemain: string = '';

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  public alertButtons = [
    {
      text: 'Batal',
      role: 'cancel',
      cssClass: 'tombol-batal',
    },
    {
      text: 'Hapus',
      role: 'confirm',
      handler: () => {
        localStorage.removeItem('data_leaderboard');
        this.displayMessageSuccess();
      },
    },
  ];



  EditPlayerModalopen() {
    this.isAddPlayer = true;
  }

  closeModal() {
    this.isAddPlayer = false;
  }

  EditPlayer() {
    localStorage.setItem('pemain_nama', this.namaPemain);
    this.isAddPlayer = false;
  }


  async displayMessageSuccess() {
    const toast = await this.toastCtrl.create({
      message: "Riwayat Skor Berhasil Dihapus.",
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
  }

}

