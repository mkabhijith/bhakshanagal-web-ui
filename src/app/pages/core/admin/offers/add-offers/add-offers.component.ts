import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.scss']
})
export class AddOffersComponent {
offersForm = new FormGroup({})

onSubmit(){
  
}
onImageChange(event: any) {
  const file = (event.target as HTMLInputElement).files?.[0];
  // this.productForm.patchValue({
  //   image: file,
  // });
}
}
