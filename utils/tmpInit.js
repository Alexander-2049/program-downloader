const fs = require('fs');

function tmpInit() {
    const dir = process.cwd() + '/tmp';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
}

module.exports = tmpInit;
