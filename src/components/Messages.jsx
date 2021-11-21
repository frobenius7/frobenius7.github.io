import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Messages (sorted from newest)</h2>
      {messages.reverse().map((message, i) =>
        // reverse order added.
        <p key={i} className={message.premium ? 'is-premium' : ''}>
          <strong>{message.sender}</strong>:<br/>
          {'['+message.timestamp+'] '}
          {message.text}
        </p>
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
