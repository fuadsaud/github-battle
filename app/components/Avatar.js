
const ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={this.props.imageURL} style={{ height: 100, width: 100 }}/>
    );
  },
});

const Link = React.createClass({
  changeURL: function() {
    window.location.replace(this.props.href);
  },
  render: function() {
    return (
      <span
        style={{ color: 'blue', cursor: 'pointer' }}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    );
  }
});

const ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <Link href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </Link>
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
