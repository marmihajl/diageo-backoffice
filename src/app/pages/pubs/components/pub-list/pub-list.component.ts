import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub-list',
  templateUrl: './pub-list.component.html',
  styleUrls: ['./pub-list.component.css']
})
export class PubListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('pub-test');
  }

}
