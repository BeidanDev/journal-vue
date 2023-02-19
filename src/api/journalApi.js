import axios from 'axios';

const journalApi = axios.create({
    // URL de firebase
    baseURL: ''
});

export default journalApi;