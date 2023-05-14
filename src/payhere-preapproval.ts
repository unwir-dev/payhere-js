import { Payhere } from './payhere';
import { PreapprovalParams } from './schemas/preapproval';
import { submitPayhereClientRequest } from './utils';
import { Customer } from './utils/customer';

const requiredPreapprovalParams: { [key: string]: string } = {
  return_url: 'returnUrl',
  cancel_url: 'cancelUrl',
  notify_url: 'notifyUrl',
  first_name: 'firstName',
  last_name: 'lastName',
  email: 'email',
  phone: 'phone',
  address: 'address',
  city: 'city',
  country: 'country',
  order_id: 'orderId',
  items: 'itemTitle',
  currency: 'currency',
};

export class PayherePreapproval extends Payhere {
  private _preapprovalObj: PreapprovalParams;
  private _customerData: Customer;
  private onApprovalError: (errorMsg: string) => void = (errorMsg) => console.error(errorMsg);

  constructor(
    customer: Customer,
    preapprovalObj: PreapprovalParams,
    onApprovalError: (errorMsg: string) => void
  ) {
    super();
    this._preapprovalObj = preapprovalObj;
    this._customerData = customer;
    this.onApprovalError = onApprovalError;
  }

  async start() {
    try {
      const preapprovalReq = {
        ...this._preapprovalObj.toJSON(),
        ...this._customerData.toJSON(),
      };
      submitPayhereClientRequest(
        preapprovalReq,
        requiredPreapprovalParams,
        '/pay/preapprove',
        this.onApprovalError
      );
    } catch (err) {
      this.onApprovalError('Unknown error: ' + err);
    }
  }
}
