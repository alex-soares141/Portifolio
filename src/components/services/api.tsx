import axios from 'axios';

export const getRepos = () => {
    return axios.get('https://api.github.com/users/alex-soares141/repos');
};
