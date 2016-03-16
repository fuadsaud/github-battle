import React from 'react';

const puke = (object) => {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

const ConfirmBattle = function(props) {
  return props.isLoading === true
    ? <p>LOADING!</p>
    : <div>Confirm Battle: {puke(props)}</div>;
}

module.exports = ConfirmBattle;
