import { Component } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  constructor(private languageService: LanguageService){}

}
