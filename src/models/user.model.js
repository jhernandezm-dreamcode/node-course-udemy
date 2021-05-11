const moongose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = moongose;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.static.encrypt = async(password) =>{
    const salt = await bcrypt.salt(10);
    return await bcrypt.hash(password,salt);
}

const User = moongose.model("User",userSchema);

module.exports = {User}
