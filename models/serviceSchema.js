const { model, Schema } = require("mongoose");

const serviceSchema = new Schema({}, { timestamps: true });

module.exports = model("Service", serviceSchema);
