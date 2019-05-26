import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-column',
  templateUrl: './side-column.component.html',
  styleUrls: ['./side-column.component.scss']
})
export class LeftColumnComponent implements OnInit {
  public theme = 'side';
  constructor() { }

  ngOnInit() {
  }

}
