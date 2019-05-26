import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import PricingPlan from './PricingItem/PricingPlan';
import pricingPlanItems from './PricingItem/pricing-plan.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

const stats = [
  {
    id: 'id-1',
    label: '.docx',
    percentage: 4,
  },
  {
    id: 'id-2',
    label: '.mp3',
    percentage: 14,
  },
  {
    id: 'id-3',
    label: '.pdf',
    percentage: 41,
  },
  {
    id: 'id-4',
    label: '.mp4',
    percentage: 12,
  },
];

const user = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
  alt: '',
  name: 'Petra Marica',
  tag: 'pmarica',
  location: 'Salvador, Brasil',
  stats: {
    followers: 1000,
    views: 2000,
    likes: 3000,
  },
};

const App = () => (
  <Fragment>
    <Profile user={user} /> <Stats title="Upload stats" stats={stats} />{' '}
    <PricingPlan items={pricingPlanItems} />{' '}
    <TransactionHistory items={transactions} />{' '}
  </Fragment>
);
export default App;
