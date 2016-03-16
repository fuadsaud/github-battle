import React from 'react';
import ReactRouter, { Link } from 'react-router';

import MainContainer from 'containers/MainContainer';

const Home = React.createClass({
  render() {
    return (
      <MainContainer>
        <h1>GitHub Battle</h1>

        <Link to="/playerOne">
          <button className="btn btn-large btn-success" type="button">
            Get started!
          </button>
        </Link>
      </MainContainer>
    );
  },
});

export default Home;
