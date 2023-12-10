/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// function sleep (seconds) {
//     const curTime = new Date().getTime();
//     let now = curTime;
//     while( now - curTime < seconds*1000){
//         now = new Date().getTime();
//     }
// }

async function sleep(seconds) {
    const wait = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`resolved after ${seconds} seconds`)
        }, seconds * 1000)
    })
    console.log(wait);
}

sleep(3);
console.log("log after sleep")