import { Component, OnInit, Input } from '@angular/core';
import { DashItemsService } from 'src/app/dash-items.service';
import { DashItem } from 'src/app/dash-item';

@Component({
  selector: 'app-dash-items',
  templateUrl: './dash-items.component.html',
  styleUrls: ['./dash-items.component.scss']
})
export class DashItemsComponent implements OnInit {

  @Input() dir: string;
  DashItems: DashItem[];

  constructor(private itemsService: DashItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemsService.getItems()
      .subscribe(items => this.DashItems = items);
  }

  getStyle() {
    if (this.dir === 'ltr') {
      return { 'right': '5px' }
    } else {
      return { 'left': '5px' }
    }
  }

}
