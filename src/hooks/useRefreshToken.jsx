<<<<<<< HEAD
import Cookies from 'js-cookie';
import { useState, useEffect, useRef } from 'react';
import {jwtDecode} from 'jwt-decode';
import { useAuth } from './useAuth';
import { api } from '../services/instance';
=======
import { useState, useEffect, useRef } from "react";
import { useAuth } from "./useAuth";
import { api } from "../services/instance";
>>>>>>> a19dcdd3a6bb57f85bb0f000c5e4b4b61af440ff

export const useTokenRefresh = () => {
  const { setAuth } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const lastRefresh = useRef(0);

  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000; // Timestamp atual em segundos
      const sevenDaysInSeconds = 7 * 24 * 60 * 60; 
  
      const expirationTime = decoded.iat + sevenDaysInSeconds;
  
      // Verifica se o token expirou
      return now > expirationTime;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return true; // Se não for possível decodificar, vai ser expirado
    }
  };

  const refresh = async () => {
    if (refreshing) {
      console.log('Já está em andamento um refresh.');
      return null;
    }

    const refreshToken = Cookies.get('refreshToken'); 
    if (!refreshToken) {
      console.error('Nenhum refresh token encontrado nos cookies.');
      return null;
    }

    if (isTokenExpired(refreshToken)) {
      console.error('Refresh token expirado. Usuário deve fazer login novamente.');
      return null;
    }

    const now = Date.now();
<<<<<<< HEAD
    if (now - lastRefresh.current < 15000) {
      console.log('Refresh bloqueado: apenas 15 segundos de intervalo');
      return null;
=======
    if (now - lastRefresh.current < 100000) {
      //Aqui vê se já passou 15seg
      console.log("Refresh bloqueado: apenas 15 segundos de intervalo");
      return; // Se não passou de 15 não faz a requisição
>>>>>>> a19dcdd3a6bb57f85bb0f000c5e4b4b61af440ff
    }

    try {
      setRefreshing(true);
<<<<<<< HEAD
      const response = await api.get('/adm/refresh-token', { refreshToken });
      console.log('Resposta ao refresh:', response.data);
=======
      const response = await api.get("/adm/refresh-token");
      console.log("Resposta da api: ", response.data);
>>>>>>> a19dcdd3a6bb57f85bb0f000c5e4b4b61af440ff

      const { accessToken, refreshToken: newRefreshToken } = response.data;

      // Atualiza o estado do token
      setAuth((prev) => ({
        ...prev,
        accessToken,
<<<<<<< HEAD
      }));

      localStorage.setItem('accessToken', accessToken);
      Cookies.set('refreshToken', newRefreshToken, { path: '/', secure: true });

      lastRefresh.current = now; // Atualiza o tempo do último refresh
      setRefreshing(false);
      return accessToken;
    } catch (error) {
      console.error('Erro ao renovar tokens:', error);
=======
        refreshToken: newRefreshToken,
      }));

      // Armazena token no localStorage
      localStorage.setItem("accessToken", accessToken);

      lastRefresh.current = now; // Atualiza o tempo do ultimo refresh
      setRefreshing(false);
      return accessToken;
    } catch (error) {
      console.error("Erro ao renovar token: ", error);
>>>>>>> a19dcdd3a6bb57f85bb0f000c5e4b4b61af440ff
      setRefreshing(false);
      throw error;
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    const intervalId = setInterval(refresh, 150000);
    return () => clearInterval(intervalId);
=======
    const intervalId = setInterval(refresh, 50000);
    return () => clearInterval(intervalId); // Limpa o IntervalId quando o componente for desmontado
>>>>>>> a19dcdd3a6bb57f85bb0f000c5e4b4b61af440ff
  }, []);

  return refresh;
};
<<<<<<< HEAD


=======
>>>>>>> a19dcdd3a6bb57f85bb0f000c5e4b4b61af440ff
