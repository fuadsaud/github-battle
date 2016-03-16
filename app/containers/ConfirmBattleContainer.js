import React from 'react';
import R from 'ramda';

import GitHubHelpers from 'utils/GitHubHelpers';
import ConfirmBattle from 'components/ConfirmBattle';

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: [],
    };
  },
  componentDidMount: function() {
    const query = this.props.location.query;

    GitHubHelpers.getPlayersInfo(
      R.pipe(R.pick(['playerOne', 'playerTwo']), R.values)(query)
    ).then((players) => {
      console.log(players);
      this.setState({ isLoading: false, playersInfo: players, });
    }).catch((error) => {
      console.error(error);
    });
  },
  render: function() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
