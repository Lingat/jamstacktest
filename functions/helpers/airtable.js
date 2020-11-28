// TODO: create Airtable configuration
require("dotenv").config(); 
const Airtable = require("airtable");
const base = new Airtable({apiKey: "keyrY4bCSA8vsHJHp"}).base("app6p8u38rAt91Xxm");
const table = base("courses");

module.exports = { table };