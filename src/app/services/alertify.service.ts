import { Injectable } from '@angular/core';
import { Product } from '../product/product';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  dialog(product:Product){
    alertify
      .confirm()
      .setting({
        transition: 'slide',
        message: `Do you want to add ${product.name} to the cart?`,
        onok: function () {
          alertify.success('Add to Cart ' + product.name);
        },
        oncancel: function () {
          alertify.error('Cancel to Adding Cart ' + product.name);
        },
      })
      .show();
  }
  successToAddProduct(product:Product){
    alertify.success("Add to product " + product.name);

  }
}
