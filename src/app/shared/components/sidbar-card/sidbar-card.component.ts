import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IcardType } from '../../types/card.type';

@Component({
  selector: 'app-sidbar-card',
  templateUrl: './sidbar-card.component.html',
  styleUrls: ['./sidbar-card.component.scss'],
})
export class SidbarCardComponent {
  @Input() cardValues!: IcardType[];
  @Output() cardEvent = new EventEmitter<number>();

  onSelectItem(id: any) {
    console.log('sidebar id', id);
    this.cardEvent.emit(id);
  }
}
