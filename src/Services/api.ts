import axios from 'axios';

const baseApiURL = 'https://gestao-andamento.herokuapp.com';

export const apiDefault = axios.create({
    baseURL: `${baseApiURL}`,
});

apiDefault.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log(error);
    if (error.response.status === 401) {
        const requestConfig = error.config;
        return axios(requestConfig);
    }
    return Promise.reject(error);
});


apiDefault.interceptors.request.use(
    async (config: any) => {
        const token: any = localStorage.getItem('@Token');

        if (!config.headers?.Authorization && token) {
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        }

        return Promise.reject({
            response: {
                status: 401,
                data: {
                    error: 'unauthorized',
                    error_description:
                        'Full authentication is required to access this resource',
                },
            },
        });
    },
    err => {
        return (
            Promise.reject(err)
        );
    }
);
