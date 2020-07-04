const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); //todo

const Flag = require('../../models/Flags');

//TODO: Pridaj validator na POST

// @route POST api/flags
// @desc  Create a flag and initialize it
// @acess Public
router.post('/', async (req, res) => {
	try {
		const newFlag = new Flag({
			identifier: req.body.identifier, //8char
			text: req.body.text, //130char
			name: req.body.name, //25char
			user: req.body.user, //20char
			curloc: req.body.curloc, //koordinaty
			dateofcreation: req.body.dateofcreation, //date
		});

		const flag = await newFlag.save();

		res.json(flag);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route GET api/flags
// @desc  Get all flags
// @acess Private
router.get('/', async (req, res) => {
	try {
		const flags = await Flag.find().sort({ date: -1 });
		res.json(flags);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route GET api/flags/:id
// @desc  Get flag by ID
// @acess Private
router.get('/:id', async (req, res) => {
	try {
		console.log(req.params);
		const flag = await Flag.findById(req.params.id);
		res.json(flag);
		if (!flag) {
			return res.status(404).json({ msg: 'Flag not found' });
		}
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res.status(404).json({ msg: 'Flag not found' });
		}
		res.status(500).send('Server Error');
	}
});

module.exports = router;
