import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

export default function Form({ onSubmit, currentUser, hadMsg }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>Sign and leave your trace in history, { currentUser.accountId }!</p>
        <p className="highlight">
          <label htmlFor="message">Message:</label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
          />
        </p>
        <p>
          <label htmlFor="donation">Donation (optional):</label>
          <input
            autoComplete="off"
            defaultValue={'0'}
            id="donation"
            max={Big(currentUser.balance).div(10 ** 24)}
            min="0"
            step="0.01"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        {hadMsg ? 
          <p>Sign blocked, you have already signed a message =(.</p>
          :
          <button type="submit">
            Sign
          </button>                
        } 
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
