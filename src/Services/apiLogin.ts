import axios from 'axios';

const baseApiURL = 'https://gestao-andamento.herokuapp.com';

const apiLoginDefault = axios.create({
  baseURL: `${baseApiURL}`,
});

export default apiLoginDefault;
