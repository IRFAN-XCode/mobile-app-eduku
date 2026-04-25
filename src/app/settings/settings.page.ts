import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

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

  async resetSkor() {
    const alert = await this.alertCtrl.create({
      header: "Hapus Semua Data?",
      message: "Semua skor di papan peringkat akan dihapus permanen.",
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Hapus',
          handler: () => {
            localStorage.removeItem('data_leaderboard');
            this.displayMessageSuccess();
          }
        }
      ]
    });

    await alert.present();
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

