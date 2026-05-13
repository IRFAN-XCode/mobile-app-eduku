import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: false,
})
export class QuizPage implements OnInit {

  chooseLevel: string = '';
  allQuestion: any[] = [];
  questionsIsKnow: any = null;
  indexQuestion: number = 0;
  skor: number = 0;

  timer: number = 15;
  timerInterval: any;

  ModalSkor: boolean = false;
  username: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.chooseLevel = this.route.snapshot.paramMap.get('level') || '';
    this.loadQuestion();
  }

  loadQuestion() {
    this.http.get<any[]>('./assets/data/questions.json').subscribe(data => {

      let questionsByLevel = data.filter(item => item.level === this.chooseLevel);
      let shuffleQuestion = questionsByLevel.sort(() => Math.random() - 0.5);
      this.allQuestion = shuffleQuestion.slice(0, 10);

      if (this.allQuestion.length > 0) {
        this.viewQuestions();
      }
    })
  }

  viewQuestions() {
    this.questionsIsKnow = this.allQuestion[this.indexQuestion];
    this.startTimer();
  }

  startTimer() {
    this.timer = 15;
    clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      this.timer--;

      if (this.timer <= 0) {
        clearInterval(this.timerInterval);

        this.checkAnswer(null);
      }
    }, 1000);
  }

  checkAnswer(userAnswer: boolean | null) {
    clearInterval(this.timerInterval);

    if (userAnswer !== null && userAnswer === this.questionsIsKnow.jawaban_benar) {
      this.skor += 10;
    }

    setTimeout(() => {
      this.indexQuestion++;

      if (this.indexQuestion < this.allQuestion.length) {
        this.viewQuestions();
      } else {
        this.quizEnded();
      }
    }, 1000);
  }

  quizEnded() {
    let username = localStorage.getItem('pemain_nama');

    this.ModalSkor = true;

    let historySkor = JSON.parse(localStorage.getItem('data_leaderboard') || '[]');

    let existingIndex = historySkor.findIndex((item: any) => item.nama === username && item.level === this.chooseLevel);

    if (existingIndex !== -1) {
      if (this.skor > historySkor[existingIndex].skor) {
        historySkor[existingIndex].skor = this.skor;
        historySkor[existingIndex].tanggal = new Date().toLocaleDateString('id-ID');
      }
    } else {
      let newSkor = {
        nama: username,
        level: this.chooseLevel,
        skor: this.skor,
        tanggal: new Date().toLocaleDateString('id-ID')
      };
      historySkor.push(newSkor);
    }

    historySkor.sort((a: any, b: any) => b.skor - a.skor);

    localStorage.setItem('data_leaderboard', JSON.stringify(historySkor));
  }


  closeModal() {
    this.ModalSkor = false;
    this.navCtrl.navigateBack('/home');
  }
}
