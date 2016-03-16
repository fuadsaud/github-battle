import axios from 'axios'

const getUserInfo = (username) => {
  return axios.get(`https://api.github.com/users/${username}`);
}

const GitHubHelpers = {
  getPlayersInfo(players) {
    return axios.all(players.map(getUserInfo)).then((responseBody) => {
      return responseBody.map((user) => user.data);
    });
  },
};

export default GitHubHelpers;
