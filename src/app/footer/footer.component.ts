import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() changeDirFn = new EventEmitter<string>();
  @Input() dir: string;
  constructor() { }

  ngOnInit() {
  }

  onChangeDir(dir: string) {
    this.changeDirFn.emit(dir);
  }
  onChangeDirSelect(event: any) {
    this.changeDirFn.emit(event.target.value);
  }

}
