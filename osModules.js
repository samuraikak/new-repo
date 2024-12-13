// // const { log } = require('console');
// // const os = require('os');
// // const { uptime } = require('process');

// // console.log(os.type());
// // console.log(os);

// // const user = os.userInfo();

// // const currentOs = {
// //     name: os.type(),
// //     release: os.release(),
// //     totalMem: os.totalmem(),
// //     freeMem: os.freemem(),
// //     // user: os.user()
// // };

// // currentOs.user = user;

// // console.log(currentOs);
// // console.log(user);


// const { log } = require('console');
// const path = require('path');

// console.log(path.sep);

// const filePath = path.join('/content', 'subfolder', 'osModules');

// console.log(filePath);

// const base = path.basename(filePath);

// console.log(base);

// const absolute = path.resolve(__dirname, '/content', 'subfolder', 'osModules');
// console.log(absolute);


const { readFileSync, writeFileSync } = require('fs');

const text1 = readFileSync('./content/first.txt', 'utf8');
const text2 = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync', `Here is the result ${ text1 } and ${ text2 }`, {flag: 'a'});
writeFileSync('./content/result-sync2', `This is the second result ${ text1 } and ${text2}`)


const result = readFileSync('./content/result-sync', 'utf8')
const result2 = readFileSync('./content/result-sync2', 'utf8')

console.log(result);
console.log(result2);
