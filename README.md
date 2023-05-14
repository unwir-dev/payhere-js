<p align="center">
  <img width="600" height="200" width="400" src="./src/static/payhere_logo.png">
</p>

# payhere-js/client

This comprehensive JavaScript SDK provides seamless integration with [payhere.lk](https://payhere.lk/), which is a highly popular payment gateway in Sri Lanka. Despite the popularity of Payhere, integrating it with modern front-end JavaScript frameworks like React.js, Angular.js, and Vue.js has been lacking a convenient solution. By utilizing this NPM package, you can effortlessly integrate Payhere into your single-page web application, ensuring a smooth and hassle-free experience.

## Features

- Works in front-end JS frameworks
- Makes one-time payments with Checkout API
- Enables recurrent payments with Recurring API (monthly, daily, annually, and forever)
- Retrieves payments data from your Payhere account using Retrieval API
- Links customers' payment information with your app for future payments without customer intervention
- Manages subscriptions (finds, retries, and cancels subscriptions)

## Installation

With PNPM

```
pnpm install payhere-js/client
```

With NPM

```
npm install payhere-js/client
```

With Yarn

```
yarn add payhere-js/client
```

## How to use

### Initialization

First initialize Payhere in the entry point of your Single Page App, by specifying the merchant ID and the account type as follows.

```
import {Payhere, AccountCategory} from "payhere-js/client"

// Sandbox
Payhere.init("12xxxxx",AccountCategory.SANDBOX)

// Live
Payhere.init("12xxxxx",AccountCategory.LIVE)
```

### Checkout

```
import {Customer, CurrencyType, PayhereCheckout, CheckoutParams} from 'payhere-js/client'

function onPayhereCheckoutError(errorMsg) {
  alert(errorMsg)
}

function checkout() {
  const customer = new Customer({
    first_name: "Demo",
    last_name: "User",
    phone: "+94771234567",
    email: "user@example.com",
    address: "No. 50, Highlevel Road, Kottawa",
    city: "Colombo",
    country: "Sri Lanka",
  })

  const checkoutData = new CheckoutParams({
    returnUrl: 'http://localhost:3000/return',
    cancelUrl: 'http://localhost:3000/cancel',
    notifyUrl: 'http://localhost:8080/notify',
    order_id: '112233',
    itemTitle: 'Demo Item',
    currency: CurrencyType.LKR,
    amount: 100
  })

  const checkout = new PayhereCheckout(customer,checkoutData,onPayhereCheckoutError)
  checkout.start()
}
```

### Subscription

```
import {PayhereSubscription,SubscriptionParams, Customer, Month,CurrencyType} from 'payhere-js/client'

function onPayhereSubscriptionError(errorMsg) {
  alert(errorMsg)
}

function initSubscription() {
  try {
    const customer = new Customer({
      first_name: "Demo",
      last_name: "User",
      phone: "+94771234567",
      email: "user@example.com",
      address: "No. 50, Highlevel Road, Kottawa",
      city: "Colombo",
      country: "Sri Lanka",
    })

    const subscriptionData = new SubscriptionParams({
      returnUrl: 'http://localhost:3000/return',
      cancelUrl: 'http://localhost:3000/cancel',
      notifyUrl: 'http://localhost:8080/notify',
      order_id: '112234',
      itemTitle: 'Demo Item',
      recurrence: new Month(1),
      duration: new Month(12),
      currency: CurrencyType.LKR,
      amount: 100
    })

    const subscription = new PayhereSubscription(customer,subscriptionData,onPayhereSubscriptionError)
    subscription.start()
  } catch(err){
    console.log(err)
  }
}
```

### Preapproval

```
import {PayherePreapproval,PreapprovalParams, Customer, CurrencyType} from 'payhere-js/client'

function preApprove() {
  const customer = new Customer({
    first_name: "Demo",
    last_name: "User",
    phone: "+94771234567",
    email: "user@example.com",
    address: "No. 50, Highlevel Road, Kottawa",
    city: "Colombo",
    country: "Sri Lanka",
  })

  const preappParams = new PreapprovalParams({
    returnUrl: 'http://localhost:3000/return',
    cancelUrl: 'http://localhost:3000/cancel',
    notifyUrl: 'https://dfc84fd10430.ngrok.io/preapprove-notify',
    order_id: '112235',
    itemTitle: 'Demo Item',
    currency: CurrencyType.LKR
  })

  const preapp = new PayherePreapproval(customer,preappParams,(err) => alert(err))
  preapp.start()
}
```

### Charge Pre approvals

Coming soon

### Payhere payment manager

Payhere payment manager contains functions to manage checkout operations and subscriptions associated with a Payhere account

#### Initialization

Coming soon

#### Retrieve access token

Coming soon

#### Get payment information of a checkout

Coming soon

#### Get all subscriptions

Coming soon

#### View payments of a subscription

Coming soon

#### Retry a subscription

Coming soon

#### Cancel a subscription

Coming soon

## Road map

- Implement unit tests for each functionality using Jest

- Implement automated charging functionality

- Implement payment data retrieval functionality

- Implement subscription data retrieval functionality

- Implement retry subscription functionality

- Implement cancel subscription functionality

<!-- - Break down the repository into several NPM packages based on the environment

  - `payhere-js/client/client` - checkout, subscription, preapproval
  - `payhere-js/client/server` - automated charging, payment data retrieval, manage subscriptions, verify webhook responses

- Create a authorized dashboard in server npm package to view payment information and manage subscriptions -->

<!-- ## Contributing

This package is still in its early stages. All conributions are highly welcome.
Please read the [contributing guide](CONTRIBUTING.md) to get started. -->

This project draws inspiration from the incredible work by [Pavindu Lakshan](https://github.com/pavinduLakshan), available at [GIT source](https://github.com/pavinduLakshan/payhere-js-sdk).
