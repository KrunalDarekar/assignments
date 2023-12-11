/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


function waitOneSecond() {
    return new Promise(function(resolve) {
        setTimeout(()=> {
            resolve(`resolved after 1 seconds`)
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve) {
        setTimeout(()=> {
            resolve(`resolved after 2 seconds`)
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve) {
        setTimeout(()=> {
            resolve(`resolved after 3 seconds`)
        }, 3000)
    })
}

function calculateTime() {
    const promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()]
    const beforeTime = new Date().getTime();
    Promise.all(promises).then(() => {
        const afterTime = new Date().getTime();
        const diff = afterTime - beforeTime;
        console.log(diff);
    })
}

module.exports = calculateTime;
