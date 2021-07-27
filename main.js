const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf8', (err,result) => {
    if(err){
        console.log(err)
        return;
        //or return null;
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err, result) =>{
        if(err){
            console.log(err)
            return;
            //or return null;
        }
        const second = result;
        writeFile(
        './content/result-async.txt',
        `Here is the result: ${first}, ${second}`, {flag: 'a'}
        ,(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result)
        console.log('done with this task');
        //final result which appears on /content/result-async.txt
        })
    })
})

console.log('starting next task')