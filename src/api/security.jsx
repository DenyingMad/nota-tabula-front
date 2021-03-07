import jwtDecode from 'jwt-decode';
import {getCommonJsonRequestProps} from "../common";

export const login = (credentials) =>
    fetch('security/login', {
        method: "POST",
        headers: {
            ...getCommonJsonRequestProps().headers,
        },
        body: JSON.stringify(credentials),
    })
        .then(response => response.json())
        .then(jwtResponse => jwtResponse.accessToken)
        .then(accessToken => {
            setCurrentUserToken(accessToken);
            return getCurrentUser();
        });

export const register = (credentials) =>
    fetch('security/register', {
        method: "POST",
        headers: {
            ...getCommonJsonRequestProps().headers,
        },
        body: JSON.stringify(credentials)
    })
        .then(response => response.json())
        .then(jwtResponse => jwtResponse.accessToken)
        .then(accessToken => {
            setCurrentUserToken(accessToken);
            return getCurrentUser();
        });

const setCurrentUserToken = (token) => {
    if (token) {
        localStorage.setItem('current-user-token', token);
    } else {
        localStorage.removeItem('current-user-token');
    }
};

export const getCurrentUser = () => {
    const currentUserToken = localStorage.getItem('current-user-token');
    if (currentUserToken) {
        const decodedJwt = jwtDecode(currentUserToken);
        if (Date.now() >= decodedJwt.exp * 1000) {
            setCurrentUserToken(null);
            return null;
        } else {
            return JSON.parse(decodedJwt.currentUser);
        }
    }
    return null;
};
