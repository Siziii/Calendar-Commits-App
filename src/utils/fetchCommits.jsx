import axios from 'axios';

const fetchCommits = async (owner, repo) => {
  const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`);
  return response.data;
};

export default fetchCommits;