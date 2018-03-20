const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	email: String,
	zip: Number,
	date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
