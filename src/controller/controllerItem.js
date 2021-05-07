const path = require("path");
const Item = require("../models/items");
const Database = require("../database/databaseConfiguration");

async function saveItem(request, response) {
  console.log(request.body);
  try {
    await Database.dbConnect();
    const item = new Item({
      name: request.body.name,
      price: request.body.price,
    });
    let saveItem = await item.save();
    await Database.dbDisconect();
    return response.status(200).json({
      message: `Data has been successfully save`,
      data: saveItem,
    });
  } catch (error) {
    console.log(error);
    return response.status(400).json({
      error: {
        message: `Fail proccesing request`,
        description: error,
      },
    });
  }
}

async function findAllItems(request, response) {
  try {
    await Database.dbConnect();
    let items = await Item.find();
    await Database.dbDisconect();
    return response.status(200).json({
      message: `Data has been successfully save`,
      data: items,
    });
  } catch (error) {
    return response.status(400).json({
      error: {
        message: `Fail proccesing request`,
        description: error,
      },
    });
  }
}

module.exports = { saveItem, findAllItems };
