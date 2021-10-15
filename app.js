const convertExcel = require('excel-as-json').processFile;
const argv = require('yargs').argv,
const fileName = argv.file.split('.');

const fileNameDest =  filename[0]+'.'+filename[1].replace('xlsx','json');
    
    convertExcel(
        `./import/${fileName}`,
        `./export/${fileNameDest}`,
        false, 
        (err,data) => console.log(`exported ${data.length} rows`) 
    );
