export const statusLookup = (status) => {
    return status === "DONE";
};

export const handlerStatusLookup = (status) => {
    return status ? "DONE" : "OPEN";
};