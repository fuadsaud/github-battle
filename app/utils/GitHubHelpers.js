import axios from 'axios'

const getUserInfo = (username) => {
  return axios.get(`https://api.github.com/users/${username}`);
};

const getRepos = (user) => {
  return axios.get(`${user.repos_url}?per_page=100`)
};

const getTotalStars = (repos) => {
  return repos.data.reduce((stargazers, repo) => {
    return stargazers + repo.stargazers_count;
  }, 0);
};

const getUserData = (player) => {
  return getRepos(player).then(getTotalStars).then((totalStars) => {
    return {
      followers: player.followers,
      totalStars: totalStars,
    };
  });
};

const calculateScores = (players) => {
  return players.map((player) => {
    return player.followers * 3 + player.totalStars;
  });
};

const GitHubHelpers = {
  getPlayersInfo(players) {
    return axios.all(players.map(getUserInfo)).then((responseBody) => {
      return responseBody.map((user) => user.data);
    }).catch(console.error);
  },
  battle(players) {
    return axios.all(players.map(getUserData)).then(calculateScores).catch(console.error)
  },
};

export default GitHubHelpers;
