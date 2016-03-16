import React from 'react';
import R from 'ramda';

import GitHubHelpers from 'utils/GitHubHelpers';
import ConfirmBattle from 'components/ConfirmBattle';

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      isLoading: true,
      playersInfo: [],
    };
  },
  componentDidMount() {
    const query = this.props.location.query;

    GitHubHelpers.getPlayersInfo(
      R.pipe(R.pick(['playerOne', 'playerTwo']), R.values)(query)
    ).then((players) => {
      this.setState({ isLoading: false, playersInfo: players, });
    })
  },
  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      }
    });
  },
  render() {
    return (
      <ConfirmBattle
        onInitiateBattle={this.handleInitiateBattle}
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
