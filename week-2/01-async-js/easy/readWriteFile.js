const fs = require("fs")

fs.writeFile("3-read-from-file.md","Hello,Whats up dude? ;)",(err) => {
    console.log("File written successfully!!")
    console.log(fs.readFileSync("3-read-from-file.md","utf-8"))        
 })