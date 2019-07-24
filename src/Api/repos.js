import axios from 'axios';

const reposApi = {
    getUserDetails: () => {
        let url = 'https://api.github.com/users/supreetsingh247';
        return axios.get(url);
    },

    getRepos: () => {
        let url = 'https://api.github.com/users/supreetsingh247/repos';
        return axios.get(url);
    }
}

export default reposApi;