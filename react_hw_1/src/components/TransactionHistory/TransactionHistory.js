import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transaction = ({ id, type, amount, currency }) => (
  <table className={styles.transaction_history}>
    <thead className={styles.transaction_head}>
      <tr>
        <th className={styles.transaction_item}>ID</th>
        <th className={styles.transaction_item}>TYPE</th>
        <th className={styles.transaction_item}>AMOUNT</th>
        <th className={styles.transaction_item}>CURRENCY</th>
      </tr>
    </thead>

    <tbody className={styles.transaction_body}>
      <tr>
        <td className={styles.transaction_item}>{id}</td>
        <td className={styles.transaction_item}>{type}</td>
        <td className={styles.transaction_item}>{amount}</td>
        <td className={styles.transaction_item}>{currency}</td>
      </tr>
    </tbody>
  </table>
);

const TransactionHistory = ({ items = [] }) => (
  <ul className={styles.transaction_list}>
    {items.map(item => (
      <li key={item.id}>
        <Transaction {...item} />
      </li>
    ))}
  </ul>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
