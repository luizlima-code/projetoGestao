import axios from 'axios';

const baseApiURL = window.env.API_URL;

const apiDefault = axios.create({
    baseURL: `${baseApiURL}/planner`,
});

apiDefault.interceptors.request.use(
    async config => {
        const token = localStorage.getItem('@Token');

        // if (!config.headers.Authorization && token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        //     return config;
        // }

        // return Promise.reject({
        //     response: {
        //         status: 401,
        //         data: {
        //             error: 'unauthorized',
        //             error_description:
        //                 'Full authentication is required to access this resource',
        //         },
        //     },
        // });
    },
    err => {
        return Promise.reject(err);
    }
);

export default apiDefault;
