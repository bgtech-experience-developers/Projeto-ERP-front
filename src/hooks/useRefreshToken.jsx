import  { useState, useEffect, useRef } from 'react';
import { useAuth } from './useAuth';
import { api } from '../services/instance';

export const useTokenRefresh = () => {
  const { setAuth } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const lastRefresh = useRef(0);

  const refresh = async () => {
    const now = Date.now();
    if (now - lastRefresh.current < 15000) { //Aqui vê se já passou 15seg
      console.log('Refresh bloqueado: apenas 15 segundos de intervalo');
      return;  // Se não passou de 15 não faz a requisição
    }

    try {
      setRefreshing(true);
      const response = await api.get('/adm/refresh-token');
      console.log('Resposta da api: ', response.data);

      const { accessToken, refreshToken: newRefreshToken } = response.data;

      // Atualiza o estado do token
      setAuth(prev => ({
        ...prev,
        accessToken,
        refreshToken: newRefreshToken
      }));

      // Armazena token no localStorage
      localStorage.setItem('accessToken', accessToken);

      lastRefresh.current = now;  // Atualiza o tempo do ultimo refresh
      setRefreshing(false);
      return accessToken;
      
    } catch (error) {
      console.error('Erro ao renovar token: ', error);
      setRefreshing(false);
      throw error;
    }
  };

  // Executa o refresh a cada X minutos/horas/dias
  useEffect(() => {
    const intervalId = setInterval(refresh, 100000);
    return () => clearInterval(intervalId);  // Limpa o IntervalId quando o componente for desmontado
  }, []);

  return refresh;  
};

