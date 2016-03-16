import React from 'react';

import GitHubHelpers from 'utils/GitHubHelpers';
import Results from 'components/Results';

const ResultsContainer = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      scores: [],
    };
  },
  playersInfo() {
    return this.props.location.state.playersInfo;
  },
  componentDidMount() {
    GitHubHelpers.battle(this.playersInfo()).then((scores) => {
      console.log("SDFDSFDSFSDFDF")
      this.setState({
        isLoading: false,
        scores: scores,
      });
    });
  },
  render() {
    console.log('render rc', this.state);
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.playersInfo()} />
    );
  },
});

export default ResultsContainer;
