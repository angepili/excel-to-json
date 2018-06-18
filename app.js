var convertExcel    = require('excel-as-json').processFile,
    argv            = require('yargs').argv,
    fileName = argv.file,
    getdate = new Date(),
    date = getdate.getFullYear()+getdate.getMonth()+getdate.getDay()+'-'+getdate.getHours()+getdate.getMinutes()+getdate.getSeconds(),
    fileNameDest =  fileName.split('.')[0]+'-'+date+'.'+fileName.split('.')[1].replace('xlsx','json');

    convertExcel('./exports/excels/'+fileName,'./exports/json/'+fileNameDest,false,function(err,data){
        console.log('Json created with '+data.length+' products, in ./exports/json/'+fileNameDest);
    });
