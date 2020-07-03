const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlagSchema = new Schema({
	id: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	user: {
		type: String,
		required: true,
	},
	dateofcreation: {
		type: Date,
		default: Date.now,
	},
	curloc: {
		type: String,
		required: true,
	},
	locations: [
		{
			date: {
				type: Date,
				default: Date.now,
			},
			location: {
				type: String,
				required: true,
			},
			user: {
				type: String,
				required: true,
			},
		},
	],
});

module.exports = mongoose.model('flag', FlagSchema);
