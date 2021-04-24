import React, { useState } from 'react';
import styles from './FormEntries.module.css';


const FormEntries = ({ onSubmit }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    
    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(amount, category);
      };
    const handleChange = evt => {
      evt.preventDefault(); 
  
      const { name, value } = evt.target;
  
      switch (name) {
        case 'amount':
          setAmount(value);
          break;
  
        case 'category':
          setCategory(value);
          break;
  
        default:
          return;
      }
    }

    return (
      <form className={styles.formSubmit} onSubmit={handleSubmit}>
        <label>
          Spend Amount ($)
          <input
            className={styles.formSubmitInput_name}
            type="text"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
        </label>
        <label>
          Category
          <input
            className={styles.formSubmitInput_number}
            type="text"
            name="category"
            value={category}
            onChange={handleChange}
          />
        </label>
        <button className={styles.formSubmitButton} type="submit">
          Create Entry
        </button>
      </form>
    );
  };
  
export default FormEntries;
