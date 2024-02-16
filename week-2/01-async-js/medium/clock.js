
function gettime()
{
let d = new Date()
    console.log('Time type - I -->   ',d.getUTCHours(),':',d.getUTCMinutes(),':',d.getUTCSeconds(),'\n')
    console.log('Time type - II -->  ',d.toLocaleTimeString(),'\n')

setTimeout(gettime, 1000);
}
gettime()