const downloadToTmp = require('./utils/downloadToTmp.js');

const programs = require('./utils/getProgramsFromConfig.js')();
require('./utils/tmpInit.js')();

(async () => {
    let downloaded = 0;
    console.log(downloaded + "/" + programs.length);
    for(let i = 0; i < programs.length; i++) {
        downloadToTmp(programs[i].url, programs[i].extension, programs[i].name)
        .then(() => {
            downloaded++;
            console.log(downloaded + "/" + programs.length + " " + programs[i].name);
        })
    }
    return;
})();