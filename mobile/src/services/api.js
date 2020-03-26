import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.68:3333'//esse normalmente é o IP da máquina, mas como estamos usando o expo podemos pegar o endereço fornecido por ele
});

export default api;