import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.scss']
})
export class ProfileOptionsComponent implements OnInit {

  @Input() dir: string;

  constructor() { }

  ngOnInit() {
  }
  getStyle() {
    if (this.dir === 'ltr') {
      return { 'right': '10px' };
    } else {
      return { 'left': '10px' };
    }
  }
}
