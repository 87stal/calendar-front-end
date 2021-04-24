import React from 'react';
import SpendingItem from './SpendigItem/SpendingItem';
import PropTypes from 'prop-types';
import styles from './SpendingsList.module.css';

const SpendingsList = ({ spendings, onDeleteSpendings, onEditSpendings }) => (
  <ul className={styles.contactList}>
    {spendings.map(({ id, amount, category }) => (
      <li className={styles.contactListItem} key={id}>
        <SpendingItem
          amount={amount}
          category={category}
          onDeleteSpendings={()=>onDeleteSpendings(id)}
          onEditSpendings={()=>onEditSpendings(id)}
        />
      </li>
    ))}
  </ul>
);
SpendingsList.propTypes = {
  spendings: PropTypes.array.isRequired,
  onDeleteSpendings: PropTypes.func.isRequired,
};
export default SpendingsList;
