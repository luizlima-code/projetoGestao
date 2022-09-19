import axios from 'axios';

const baseApiURL = 'https://gestao-projetos.herokuapp.com';

const apiLoginDefault = axios.create({
  baseURL: `${baseApiURL}`,
});

export default apiLoginDefault;
