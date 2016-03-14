const React = require('react');

const ConfirmBattle = require('../components/ConfirmBattle');

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    };
  },
  componentDidMount: function() {
    const query = this.props.location.query;

    console.log(query);
  },
  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo}/>
    );
  }
});

module.exports = ConfirmBattleContainer;
