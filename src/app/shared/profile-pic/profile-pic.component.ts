import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  @Input() picWidth: string;
  @Input() theme: string;
  constructor() {
    // let style: string;

  }

  picStyle() {
    if (this.theme === 'side') {
      return { 'border-radius': '50%', 'border': '1px solid #83B1EC', 'padding': '5px' };
    } else {
      return { 'border-radius': '50%', 'position': 'absolute', 'top':'-7px', 'right': '0' };
    }
  }

  // picClass() {
  //   if (this.theme === 'side') {
  //     return ['icon-baseline-verified'];
  //   } else {
  //     return '';
  //   }
  // }
  ngOnInit() {
  }

}
