import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  examples: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.examples.push('paragraph');
    }
  }

}
