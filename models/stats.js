const mongoose = require("mongoose");

const Schema = mongoose.Schema;






const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;