import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  @Input() dir: string;
  constructor() { }

  ngOnInit() {
  }

}
