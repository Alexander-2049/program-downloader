const fs = require('fs');

function getProgramsFromConfig() {
    const json = fs.readFileSync( process.cwd() + "/config.json");
    const data = JSON.parse(json);
    const {programs} = data;
    return programs;
}

module.exports = getProgramsFromConfig;