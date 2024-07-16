import React from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Free',
    price: '$0/month',
    features: [
      { name: 'Single User', available: true },
      { name: '50GB Storage', available: true },
      { name: 'Unlimited Public Projects', available: true },
      { name: 'Community Access', available: true },
      { name: 'Unlimited Private Projects', available: false },
      { name: 'Dedicated Phone Support', available: false },
      { name: 'Free Subdomain', available: false },
      { name: 'Monthly Status Reports', available: false },
    ],
  },
  {
    name: 'Plus',
    price: '$9/month',
    features: [
      { name: '5 Users', available: true },
      { name: '50GB Storage', available: true },
      { name: 'Unlimited Public Projects', available: true },
      { name: 'Community Access', available: true },
      { name: 'Unlimited Private Projects', available: true },
      { name: 'Dedicated Phone Support', available: true },
      { name: 'Free Subdomain', available: true },
      { name: 'Monthly Status Reports', available: false },
    ],
  },
  {
    name: 'Pro',
    price: '$49/month',
    features: [
      { name: 'Unlimited Users', available: true },
      { name: '50GB Storage', available: true },
      { name: 'Unlimited Public Projects', available: true },
      { name: 'Community Access', available: true },
      { name: 'Unlimited Private Projects', available: true },
      { name: 'Dedicated Phone Support', available: true },
      { name: 'Free Subdomain', available: true },
      { name: 'Monthly Status Reports', available: true },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="pricing">
      {plans.map((plan, index) => (
        <div key={index} className="card">
          <h2>Plan Name: {plan.name}</h2><hr />
          <p className="price">Price: {plan.price}</p><hr />
          <h3>Features</h3>
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx} className={feature.available ? 'available' : 'unavailable'}>
                {feature.available ? '✔' : '✘'} {feature.name} <hr />
              </li>
            ))}
          </ul>
          <button className='outline-button'>BUTTON</button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
