import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../Components/Dashboard';
import apiLoginDefault from '../../Services/apiLogin';

import { Container, ContainerContent, MainContent, Input, ButtonLogin, LogoImg } from './styles';

interface LoginTypes {
    email: string;
    senha: string;
}

interface LoginSuccessTypes {
    token: string;
    email: string;
    expiration: any;
}

const Login: React.FC = () => {
    const navigate = useNavigate();

    async function loginUser(credentials: LoginTypes) {
        let body = { email: credentials.email, senha: credentials.senha };
        let res = await apiLoginDefault.post('planner/auth/login', body);

        let data = res.data.token;
        localStorage.setItem('@Token', data);
    }

    const initial_values = {
        email: '',
        senha: '',
    }

    const handleLogin = async (values: LoginTypes, setSubmitting: Function) => {
        const response = await loginUser(values);
        setSubmitting();
        navigate("/");
    }

    return (
        <Container>
            <ContainerContent>
                <MainContent>
                    <LogoImg src="/logo.svg" alt='logoTipo' />
                    <Formik
                        enableReinitialize={false}
                        initialValues={initial_values}
                        onSubmit={(values: LoginTypes, { setSubmitting }) => {
                            handleLogin(values, setSubmitting);
                        }}
                    >
                        <Form>
                            <Input placeholder='email' id='email' name="email" />
                            <Input placeholder='senha' id="senha" name="senha" type="password" />
                            <ButtonLogin type="submit">Login</ButtonLogin>
                        </Form>
                    </Formik>
                </MainContent>
            </ContainerContent>
        </Container>
    );
}

export default Login;