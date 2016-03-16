import React from 'react';
import ReactRouter, { Link } from 'react-router';
import { trasparentBg } from 'styles/index';

const Home = React.createClass({
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>GitHub Battle</h1>

        <p className="lead"></p>

        <Link to="/playerOne">
          <button className="btn btn-large btn-success" type="button">
            Get started!
          </button>
        </Link>
      </div>
    );
  },
});

export default Home;
