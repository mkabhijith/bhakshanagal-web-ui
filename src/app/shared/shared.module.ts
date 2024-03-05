import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CaptlizePipe } from './pipes/captlize.pipe';

@NgModule({
  declarations: [
    CaptlizePipe
  ],
  imports: [CommonModule, HttpClientModule],
  exports:[CaptlizePipe]
})
export class SharedModule {}
