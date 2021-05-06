const path = require('path');

async function errorView(request,response){
    response.sendFile(path.resolve('src/views/error.html'))
}

module.exports = {errorView}