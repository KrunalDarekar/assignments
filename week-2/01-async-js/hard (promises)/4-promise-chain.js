/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    const beforeTime = new Date().getTime();
    waitOneSecond().then(() => {
        waitTwoSecond().then(() => {
            waitThreeSecond().then(() => {
                const afterTime = new Date().getTime();
                console.log(beforeTime - afterTime)
            })
        })
    })
}

module.exports = calculateTime;
