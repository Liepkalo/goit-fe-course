import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={styles.stats_section}>
    {' '}
    {title && (
      <Fragment>
        <h2 className={styles.title}> {title} </h2>
        <ul className={styles.stat_list}>
          {' '}
          {stats.map(item => (
            <li className={styles.item} key={item.id}>
              <span className={styles.label}> {item.label} </span> <br />
              <span className={styles.percentage}>
                {' '}
                {item.percentage} %{' '}
              </span>{' '}
            </li>
          ))}{' '}
        </ul>{' '}
      </Fragment>
    )}{' '}
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
