/** Command-line tool to generate Markov text. */

const Markov = require('./markov')
const axios = require('axios')
const process = require('process')
const fs = require('fs')




function createText(text){
    let m = new Markov.MarkovMachine(text)
    console.log(m.makeText())
}


function readText(path){
    fs.readFile(path, 'utf8', (err, data) =>{
        if (err) {
            console.log("Error! cannot read the file data.")
            process.exit(1)
        }
        createText(data)
    })
}

async function readURL(url){
    let response;
    try{
        let res = await axios.get(url)
        response = res.data
    } catch(err){
        console.log("Error! cannot read the URL data.")
        process.exit(1)
    }
    createText(response)
}

let [method, path] = process.argv.slice(2);
// console.log(process.argv)
// console.log(method)
// console.log(path)
if (method === "file") {
  readText(path);
}

else if (method === "url") {
  readURL(path);
}

else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}