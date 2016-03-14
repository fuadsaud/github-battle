const React = require('react');

const ConfirmBattle = function(props) {
  return props.isLoading === true
    ? <p>LOADING!</p>
    : <p>Confirm Battle</p>;
}

module.exports = ConfirmBattle;
