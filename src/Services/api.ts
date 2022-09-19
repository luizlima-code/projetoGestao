import axios from 'axios';
import { useEffect } from 'react';

const baseApiURL = 'https://gestao-projetos.herokuapp.com';

const apiDefault = axios.create({
    baseURL: `${baseApiURL}`,
});

apiDefault.interceptors.request.use(
    async (config: any) => {
        const tokenStorage: any = localStorage.getItem(JSON.stringify('@Token'));
        const token = tokenStorage.token;

        useEffect(() => {
            console.log(token);
        }, [token])

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
        return Promise.reject(err);
    }
);

export default apiDefault;
