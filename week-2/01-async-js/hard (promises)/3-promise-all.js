/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

calculateTime();