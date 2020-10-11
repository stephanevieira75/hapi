import React, { useState } from 'react';
import './login.css'

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-form">
            <h1>Connexion</h1>
            <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Identifiant ou mail"/>
            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Mot de passe"/>
            <button type="button" onClick={() => console.log('toto')}>
                Connexion
            </button>
        </div>
    );
}

export default Login;