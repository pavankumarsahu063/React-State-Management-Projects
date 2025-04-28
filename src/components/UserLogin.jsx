import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function UserLogin() {
    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handelSubmit = (e) => {
        e.preventDefault();
        setUser({ username, userpassword }); 
    };

    return (
        <>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter password"
                value={userpassword}
                onChange={(e) => setUserpassword(e.target.value)}
            />
            <button onClick={handelSubmit}>Login</button>
        </>
    );
}

export default UserLogin;
