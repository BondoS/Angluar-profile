import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Direction } from '@angular/cdk/bidi';

@Injectable()
export class UiDirectionService {

    dir: BehaviorSubject<Direction>;
    direction: Direction;
    constructor() {
        this.direction = "ltr";
        this.dir = new BehaviorSubject(this.direction);
    }
    toggleDirection() {
        this.direction = this.direction == "ltr" ? "rtl" : "ltr";
        this.dir.next(this.direction);
    }
}
