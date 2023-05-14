import { RecurringTimeUnit } from '../utils/recurring-time-unit';
import { BaseParamsType } from './base-params';
import { Item } from './item';

export interface SubscriptionParamsType extends BaseParamsType {
  // Recurring period
  recurrence: RecurringTimeUnit;
  // subscription duration
  duration: RecurringTimeUnit;
  // Total Payment Amount
  amount: number;

  /* Optional parameters*/

  // Delivery Address Line1 + Line2
  deliveryAddress?: string;
  // Delivery City
  deliveryCity?: string;
  // Delivery Country
  deliveryCountry?: string;
  items?: [Item];
  // Startup fee
  startupFee?: string;
}
