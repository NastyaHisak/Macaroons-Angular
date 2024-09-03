import {Component, Input} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent{
  @Input() advantage: AdvantageType;
  @Input() advantageIndex: number = 0;

  constructor() {
    this.advantage = {
      title: '',
      text: ''
    }
  }

}
