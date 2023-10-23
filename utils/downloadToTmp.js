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

    new Promise((resolve, reject) => {
        if(isHTTPS) {
            https.get(url, function(response) {
                response.pipe(file);
                
                file.on("finish", () => {
                    file.close();
                    resolve(fileName);
                });

                file.on("error", (error) => {
                    file.close();
                    reject(error.message);
                })
            });
        } else {
            http.get(url, function(response) {
                response.pipe(file);
                
                file.on("finish", () => {
                    file.close();
                    resolve(fileName);
                });

                file.on("error", (error) => {
                    file.close();
                    reject(error.message);
                })
            });
        }
    });

    return fileName;
}

module.exports = downloadToTmp;