import jwtDecode from 'jwt-decode';
import {getCommonJsonRequestProps, throwHttpErrors} from "../common";

export const login = (creds) =>
    fetch(`/rest/security/login`, {
        method: "POST",
        ...getCommonJsonRequestProps(),
        body: JSON.stringify(creds),
    })
        .then(throwHttpErrors)
        .then(response => response.json())
        .then(jwtResponse => jwtResponse.accessToken)
        .then(accessToken => {
            setCurrentUserToken(accessToken);
            return getCurrentUser();
        });

export const register = (creds) =>
    fetch(`/rest/security/register`, {
        method: "POST",
        ...getCommonJsonRequestProps(),
        body: JSON.stringify(creds)
    })
        .then(throwHttpErrors);

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
            return decodedJwt.sub;
        }
    }
    return null;
};
