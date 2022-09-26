import axios from 'axios';
import jwt_decode from "jwt-decode";

const baseApiURL = 'https://gestao-projetos.herokuapp.com';

const apiDefault = axios.create({
    baseURL: `${baseApiURL}`,
});

apiDefault.interceptors.request.use(
    async (config: any) => {
        const token: any = localStorage.getItem('@Token');
        let decodedToken: any = jwt_decode(token);
        console.log("Decoded Token", decodedToken);
        let currentDate = new Date();

        // JWT exp is in seconds
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            console.log("Token expired.");
        } else {
            console.log("Valid token");
        }

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
