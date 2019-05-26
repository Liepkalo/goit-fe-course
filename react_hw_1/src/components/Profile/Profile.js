import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
  user: {
    name,
    tag,
    alt,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img className={styles.avatar} src={avatar} alt={alt} width="120" />
      <p className={styles.name}> {name} </p>{' '}
      <p className={styles.tag}> @ {tag} </p>{' '}
      <p className={styles.location}> {location} </p>{' '}
    </div>{' '}
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}> Followers </span> <br />
        <span className={styles.quantity}> {followers} </span>{' '}
      </li>{' '}
      <li className={styles.item}>
        <span className={styles.label}> Views </span> <br />
        <span className={styles.quantity}> {views} </span>{' '}
      </li>{' '}
      <li className={styles.item}>
        <span className={styles.label}> Likes </span> <br />
        <span className={styles.quantity}> {likes} </span>{' '}
      </li>{' '}
    </ul>{' '}
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
