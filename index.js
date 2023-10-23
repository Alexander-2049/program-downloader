const downloadToTmp = require('./utils/downloadToTmp.js');

const programs = require('./utils/getProgramsFromConfig.js')();
require('./utils/tmpInit.js')();

(async () => {
    for(let i = 0; i < programs.length; i++) {
        console.log("Downloading " + programs[i].name);
        await downloadToTmp(programs[i].url, programs[i].extension, programs[i].name);
    }
})();