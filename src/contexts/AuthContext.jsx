import React, { createContext, useState } from 'react';
import { api } from '../services/instance';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();



export function AuthProvider({ children }) {
    const [isAuth, setAuth] = useState(false);
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()

    const singIn = async (userData) => {
        try {
            const { cnpj, password } = userData;
            const  response  = await api.post('/adm/login', JSON.stringify({
                cnpj, password
            }),
                {
                    headers: { 'Content-Type': 'application/json' },
                })

              
            const { token, refreshToken } = response.data;
            localStorage.setItem('accessToken', token);
            document.cookie = `refreshToken=${refreshToken}; path=/;`; // Refresh token

            console.log("Token: ", token);
            console.log("refreshToken: ", refreshToken);

            console.log('Login realizado com sucesso!');
            navigate("/*")
            
        } catch (error) {
            console.log('Erro ao realizar o login: ', error);
            window.alert('Não foi possível realizar o login')
        }
    }

    return (
        <AuthContext.Provider value={{ isAuth, setAuth, userData, setUserData, singIn }}>
            {children}
        </AuthContext.Provider>
    )
}


