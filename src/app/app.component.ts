import { Component, Input } from '@angular/core';
import localeAr from '@angular/common/locales/ar-EG';
import { registerLocaleData } from '@angular/common';



registerLocaleData(localeAr, 'ar');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neom';
  @Input() dir = 'ltr';
  changeDir( newDir: string): void {
    this.dir = newDir;
  }
}
