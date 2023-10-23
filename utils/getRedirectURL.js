async function getRedirectURL(url) {
    const response = await fetch(url);
    return response.url;
}

module.exports = getRedirectURL;