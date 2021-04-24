import React from 'react';
import PropTypes from 'prop-types';
import styles from './SpendingItem.module.css';

const SpendingItem = ({ amount, category, onDeleteSpendings, onEditSpendings }) => (
  <>
    <span className={styles.contactName}>
      {category} {amount}'$' 
    </span> 
    <button
      className={styles.contactDeleteButton}
      onClick={onEditSpendings}
    >
      Edit
    </button>
    <button
      className={styles.contactDeleteButton}
      onClick={onDeleteSpendings}
    >
      Remove
    </button>
   
  </>
);
SpendingItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default SpendingItem;