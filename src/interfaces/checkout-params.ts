import { BaseParamsType } from './base-params';
import { Item } from './item';

export interface CheckoutParamsType extends BaseParamsType {
  // Total Payment Amount
  amount: number;
  /* Optional parameters*/
  // Delivery Address Line1 + Line2
  deliveryAddress?: string;
  // Delivery City
  deliveryCity?: string;
  // Delivery Country
  deliveryCountry?: string;
  // Array of Items purchased
  items?: [Item];
}
