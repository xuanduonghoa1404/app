import React, {useCallback, useState} from 'react';
import Router from 'next/router';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Navigator from "../Components/Navigator";
import styles from '../styles/Navigator.module.css'
import { useForm } from "react-hook-form";

export default function Login() {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);
    // return (
    //     <div>
    //         <p>You clicked {count} times</p>
    //         <button onClick={() => setCount(count + 1)}>
    //             Click me
    //         </button>
    //     </div>
    // );
    const [loginError, setLoginError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3002/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
            .then((r) => {
                console.log(r)
                return r;
            })
            .then((data) => {
                if (data && data.status === 404) {
                    // setLoginError(data.message);
                    setLoginError('Username or password are incorrect');
                } else {
                    Router.push('Dashboard');
                }
            });
    }

    const handle = useCallback(() => {
        fetch('http://localhost:3002/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
            .then((r) => {
                console.log(r)
                return r;
            })
            .then((data) => {
                if (data && data.error) {
                    // setLoginError(data.message);
                    setLoginError('Username or password are incorrect');
                } else {
                    Router.push('Dashboard');
                }
            });
    }, [username, password]);
    return (
        <div className={styles.wrapper}>
            {/*<Navigator/>*/}
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <p>Login<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></p>*/}
            {/*    <input*/}
            {/*        name="email"*/}
            {/*        type="text"*/}
            {/*        value={username}*/}
            {/*        onChange={(e) => setUsername(e.target.value)}*/}
            {/*    />*/}
            {/*    <input*/}
            {/*        name="password"*/}
            {/*        type="password"*/}
            {/*        value={password}*/}
            {/*        onChange={(e) => setPassword(e.target.value)}*/}
            {/*    />*/}
            {/*    <input type="submit" value="Submit"/>*/}
            {/*    {loginError && <p style={{color: 'red'}}>{loginError}</p>}*/}
            {/*</form>*/}
            <div className="login-form">
                <h2 className="title">SOIOT SYSTEM </h2>
                <form action="Dashboard" onSubmit={handle}>
                    <input type="text" className="form-control" value={username} name="username" placeholder="Username"
                           onChange={(e) => setUsername(e.target.value)}
                           required="required"/>
                    <input type="password" className="form-control" value={password} name="password"
                           placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}
                           required="required"/>
                    <div style={{textAlign: 'center'}}>

                        <button type="button" className="login-button" id="login" onClick={handleSubmit}>LOGIN</button>
                        <button type="button" className="signup-button" id="signup">or create new account
                        </button>
                    </div>
                </form>
                {loginError && <span className="danger">{loginError}</span>}


            </div>
        </div>
    );
}