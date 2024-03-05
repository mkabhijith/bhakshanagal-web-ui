import { Component, Input } from '@angular/core';
import { ButtonType } from '../button.type';

@Component({
  selector: 'app-secoundary-button',
  templateUrl: './secoundary-button.component.html',
  styleUrls: ['./secoundary-button.component.scss']
})
export class SecoundaryButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;

}
