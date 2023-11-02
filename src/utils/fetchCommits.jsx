import axios from 'axios';

const fetchCommits = async (owner, repo) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`);
    return response.data;
  } catch (error) {
    console.error('Error fetching commits:', error);
    return [];
  }
};

export default fetchCommits;