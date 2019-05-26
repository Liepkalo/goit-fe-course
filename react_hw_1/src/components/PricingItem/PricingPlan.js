import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import styles from './PricingItem.module.css';

const PricingPlan = ({ items = [] }) => (
  <ul className={styles.pricing_plan}>
    {' '}
    {items.map(item => (
      <li key={item.price}>
        <PricingItem {...item} />{' '}
      </li>
    ))}{' '}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
