import { Component, Input } from '@angular/core';
import { ButtonType } from '../button.type';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
 
export class PrimaryButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;

}
