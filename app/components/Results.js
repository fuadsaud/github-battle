import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from 'styles/index';
import MainContainer from 'containers/MainContainer';
import UserDetails from 'components/UserDetails';
import UserDetailsWrapper from 'components/UserDetailsWrapper';

const StarOver = (props) => {
  return (
    <div className="col-sm-12" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Star Over</button>
      </Link>
    </div>
  );
}

const Results = (props) => {
  console.log('rr', props)
  if (props.isLoading === true) {
    console.log('tre')
    return <p>LOADING!</p>;
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a Tie!</h1>

        <StarOver />
      </MainContainer>
    );
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>

      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>

        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>

      <StartOver />
    </MainContainer>
  );
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
};

export default Results;