import jwtDecode from 'jwt-decode';

export const login = () => (
    // todo
    fetch('url/login', {
        method: "POST",
    })
);

export const register = () => (
    //todo
    fetch('url/register', {
        method: "POST",
    })
);

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
