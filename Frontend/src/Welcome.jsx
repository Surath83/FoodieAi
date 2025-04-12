import React, { useEffect, useState } from 'react';
import style from './Welcome.module.css'
function Welcome() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const visited = getCookie('visited');
        if (visited) {
            setMessage('Welcome back to Foodie');
        } else {
            setMessage('Welcome to Foodie');
            setCookie('visited', 'true', 7);
        }
    }, []);

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    }

    function getCookie(name) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith(`${name}=`)) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    return <h1 className={style.msg}>{message}</h1>;
}

export default Welcome;
