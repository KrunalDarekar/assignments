/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep (seconds) {
//     const curTime = new Date().getTime();
//     let now = curTime;
//     while( now - curTime < seconds*1000){
//         now = new Date().getTime();
//     }
// }

async function sleep(milliseconds) {
    const wait = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`resolved after ${milliseconds} milliseconds`)
        }, milliseconds)
    })
    console.log(wait);
}

module.exports = sleep;
