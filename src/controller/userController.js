async function login(request,response){
    let body = request.body;
    return response.status(200).json({
        email:body.email,
        token: "abc"
    })
}


module.exports = {login}