const https = require('https');
const http = require('http');
const fs = require('fs');
const getUniqueName = require('./getUniqueName');
const getRedirectURL = require('./getRedirectURL');

async function downloadToTmp(url, extension = "exe", name = getUniqueName()) {
    url = await getRedirectURL(url);
    const isHTTPS = new URL(url).protocol === 'https:' ? true : false;

    const fileName = "tmp/" + name + "." + extension;
    const file = fs.createWriteStream(fileName);

    await new Promise((resolve, reject) => {
        const protocol = isHTTPS ? https : http;

        const request = protocol.get(url, function(response) {
            response.pipe(file);

            response.on('end', () => {
                file.end();
                resolve(fileName);
            });

            response.on('error', (error) => {
                file.end();
                reject(error);
            });
        });

        request.on('error', (error) => {
            file.end();
            reject(error);
        });
    });

    return fileName;
}

module.exports = downloadToTmp;