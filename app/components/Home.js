const React = require('react');
const ReactRouter = require('react-router');
const transparentBg = require('../styles').transparentBg;
const Link = ReactRouter.Link;

const Home = React.createClass({
  render: function() {
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
  }
});

module.exports = Home;
