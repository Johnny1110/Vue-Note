export const setAuthorization = ({tokenType, accessToken}) => {
    localStorage.clear();
    localStorage.setItem("tokenType", tokenType);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("authenticated", true);
};

export const authenticated = () => {
    let authenticated = localStorage.getItem("authenticated");
    return authenticated ? authenticated : false;
};

export const getAuthorization = () => {
    let tokenType = localStorage.getItem("tokenType");
    let accessToken = localStorage.getItem("accessToken");
    return `${tokenType} ${accessToken}`;
};

export const cleanAuthStore = () => {
    localStorage.clear();
    window.location.reload();
};