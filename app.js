var convertExcel    = require('excel-as-json').processFile,
    argv            = require('yargs').argv,
    fileName        = argv.file.split('.'),
    fileNameDest    = '';

    fileNameDest =  filename[0]+'.'+filename[1].replace('xlsx','json');

    convertExcel('./import/'+fileName,'./export/'+fileNameDest,false,function(err,data){
        console.log('exported '+data.length+' rows);
    });
