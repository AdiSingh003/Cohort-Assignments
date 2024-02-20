/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
const start = Date.now();
function wait(n) {
    return new Promise(function(resolve){
        setTimeout(() => {
        resolve()
        }, n*1000);    
    })      
}

wait().then(() => {
    const end = Date.now();
    const difference = end - start;
    console.log(difference)
})
module.exports = wait;
