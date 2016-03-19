import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from 'styles/index';
import MainContainer from 'containers/MainContainer';
import UserDetails from 'components/UserDetails';
import UserDetailsWrapper from 'components/UserDetailsWrapper';
import Loading from 'components/Loading';

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <Loading speed={800} text='Waiting' />
    : <MainContainer>
        <h1>Confirm Players</h1>

        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper>
            <UserDetails header="Player 1" info={props.playersInfo[0]} />
          </UserDetailsWrapper>

          <UserDetailsWrapper>
            <UserDetails header="Player 2" info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>

        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>

          <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
              <button type="button" className="btn btn-lg btn-danger">
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
};

export default ConfirmBattle;
