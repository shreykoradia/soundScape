export const getTokenFromURL = () => {
    // return the URL component after # inside URL 
    return window.location.hash.substring(1).split("&").reduce((initial , item) => {
        var part = item.split("=");
        initial[part[0]] = decodeURIComponent(part[1]);
        return initial;
    }, {});
};