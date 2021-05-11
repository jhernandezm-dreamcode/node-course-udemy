const config = require("../settings/config")
const jwt = require("jsonwebtoken");
async function login(request, response) {
  let body = request.body;
  const token = await jwt.sign({ id: body.email }, config.config.SECRET, {expiresIn:84600});
  return response.status(200).json({
    email: body.email,
    token: token,
  });
}

module.exports = { login };
