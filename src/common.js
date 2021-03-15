export const getCommonJsonRequestProps = () => {
    const commonHttpRequestProps = getCommonHttpRequestProps();
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
    };
    if (commonHttpRequestProps.headers && commonHttpRequestProps.headers.Authorization) {
        headers.Authorization = commonHttpRequestProps.headers.Authorization;
    }
    return {
        ...commonHttpRequestProps,
        headers,
    };
};

export const getCommonHttpRequestProps = () => {
    const props = {credentials: "same-origin"};
    const token = localStorage.getItem('current-user-token');
    if (token) {
        props.headers = {Authorization: `Bearer ${token}`};
    }
    return props;
};

export const throwHttpErrors = (response) => {
    // todo in develop
    if (response.status === 409) {
        return new Promise((resolve, reject) => response.json()
            .then(violations => reject(new Error('Server validation error'))));
    }

    if (response.status >= 400 && response.status <= 599) {
        return new Promise((resolve, reject) => response.text()
            .then(text => reject(new Error(`${response.status} ${response.statusText}\n\n${text}`))));
    }
    return response;
};
