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
			user: {
				type: String,
				required: true,
			},
			location: {
				type: String,
				required: true,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
});

module.exports = mongoose.model('flag', FlagSchema);
