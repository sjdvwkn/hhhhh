// preinstall.js  
const fs = require('fs');

if (!fs.existsSync('some-required-file.txt')) {
    console.error('Required file some-required-file.txt is missing. Please create it before running the installation.');
    process.exit(1);
}

// 执行其他逻辑...  
console.log('All required files are present. Proceeding with installation...');