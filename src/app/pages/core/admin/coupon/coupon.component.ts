import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CouponService } from './coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent {
  constructor(private couponService: CouponService) {}
  couponForm = new FormGroup({
    coupon_code: new FormControl(''),
    valid_from: new FormControl(''),
    valid_to: new FormControl(''),
    coupon_status: new FormControl(''),
  });
  onSubmit() {
    console.log(this.couponForm.value);
    this.couponService.addCoupon(this.couponForm.value).subscribe({
      next: (res) => {
        if (!res.result) {
          alert(res.message);
        }
      },
    });
  }
}
