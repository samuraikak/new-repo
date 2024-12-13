// // console.log(_dirname);

// const name = 'johndoe'

// const SayHi = require('./utils');
// const { Bobby } = require('./names');

// // const promise1 = new Promise((resolve, reject) => {
// //     if(name === 'Nsikak') {
// //         resolve(name)
// //     } if(name !== 'Nsikak') {
// //         reject('NoName')
// //     }
// // })



// // setTimeout(() => {
// //     const rejectedPromise = Promise.reject('Failed Network Request');
// //     console.log(rejectedPromise);
// // }, 3000);

// setTimeout(()=> {
//     // console.log(promise1);
//     SayHi(Bobby);
// }, 2000);


const { readFile, writeFile } = require('fs');

console.log('starting process');

readFile('./content/first.txt', 'utf8', (err, result)=> {

    if(err) {
        console.log(err);
        return;
    }   
    console.log(result);

    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result)=> {
        if(err) {
            console.log(err);
            return;
        }

        const second = result;
        console.log(second);
        
        writeFile('./content/result-async', `This is the result ${first} and ${second}`, (err, result)=> {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result);
            
        });

    })

    
    
})

console.log('finishing process');
