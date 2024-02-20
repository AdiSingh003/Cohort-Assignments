/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
const start = Date.now();
function sleep(milliseconds) {
    return new Promise(function(resolve){
        setTimeout(() => {
        }, milliseconds);
        setTimeout(() => {
        resolve()
        }, milliseconds);    
    })      

}
async function main(){
        await sleep() 
        const end = Date.now();
        const difference = end - start;
        console.log(difference)
}

module.exports = sleep;
