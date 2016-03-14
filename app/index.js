const USER_DATA = {
  name: 'Fuad Saud',
  username: 'fuadsaud',
  image: 'https://avatars1.githubusercontent.com/u/1993787?v=3&s=460'
}

const React = require('react');
const ReactDOM = require('react-dom');

const ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={this.props.imageURL} style={{ height: 100, width: 100 }}/>
    );
  },
});

const ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

const ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    );
  }
});

const Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageURL={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
