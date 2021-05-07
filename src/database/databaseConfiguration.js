const moongose = require("mongoose");
const uri = require("../settings/dbcredential");

const dbConnect = async () => {
  try {
    await moongose.connect(uri.mongoDBUri);
    console.log("DB connected");
  } catch (error) {
    console.log("error db", error);
    process.exit(1);
  }
};

const dbDisconect = async () => {
  try {
    await moongose.disconnect();
    console.log("db disconected");
  } catch (error) {
    console.log("error db", error);
    process.exit(1);
  }
};

module.exports = {dbConnect,dbDisconect}
