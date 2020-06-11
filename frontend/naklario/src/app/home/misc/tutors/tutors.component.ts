import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent implements OnInit {

  tutorReasons = [
    {
      h: 'Flexibel',
      text: 'Hilf, wann und wo auch immer Du willst.'
    }, {
      h: '#gutfürskarma',
      text: 'Ehrenamtlich Helfen war noch nie so toll!'
    }, {
      h: 'Einfach',
      text: 'Alles, was Du brauchst ist Dein Wissen.'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
