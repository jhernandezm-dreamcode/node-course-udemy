const path = require('path');

async function helloWorld(request, response){
    console.log("Hellor world since node")
    response.sendFile(path.resolve('src/views/index.html'))
}

async function addItems(request,response){
    response.sendFile(path.resolve('src/views/add-item.html'))
}

module.exports = {helloWorld,addItems}