export const getCommonJsonRequestProps = () => {
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
    };
    return {
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