import React, { useState } from 'react';
import './login.css'

import UserServices from '../../services/UserServices';
import { useHistory } from 'react-router-dom';

function Login(props) {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function login(username: string, password: string, history: any) {
        return UserServices.getUserByEntries(username, password, (user: any) => {
            if (user && user.id) {
                return history.push(`/dashboard/${user.id}/`);
            }
        });
    }

    return (
        <div className="login-form">
            <h1>Connexion</h1>
            <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Identifiant ou mail"/>
            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Mot de passe"/>
            <button type="button" onClick={() => login(username, password, history)}>
                Connexion
            </button>
        </div>
    );
}

export default Login;