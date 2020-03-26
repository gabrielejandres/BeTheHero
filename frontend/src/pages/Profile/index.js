import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

/* INTEGRAÇÃO */
import api from "../../services/api";

/* CSS */
import './styles.css';

/* Importação das imagens */
import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    /* Faz com que os dados sejam recuperados do BD assim que a página é carregada */
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]); //o segundo parâmetro é um array de dependências, quando ele está vazio, ele vai ser executado somente uma vez no fluxo do componente

    /* Apagar um caso */
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            //removendo o caso do array de casos para atualizar a página em tempo real
            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch(err) {
            alert('Erro ao deletar caso, tente novamente!');
        }
    }

    /* Logout */
    function handleLogout() {
        localStorage.clear(); //limpa todo o localStorage
        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span> Bem vida, { ongName }! </span>
            
                <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link> 
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>

            <h1> Casos cadastrados </h1>

            <ul>
                {/* o .map percorre o array incidents */}
                { incidents.map( incident => (
                    <li key={incident.id}>
                    <strong> CASO: </strong>
                    <p> {incident.title} </p>

                    <strong> DESCRIÇÃO: </strong>
                    <p> {incident.description}  </p>

                    <strong> VALOR: </strong>
                    <p> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) }  </p>

                    {/* é necessário usar arrow function porque, do contrário, seria passado somente o retorno da função ao onClick e todos os casos seriam apagados */}
                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="a8a8b3"></FiTrash2>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}