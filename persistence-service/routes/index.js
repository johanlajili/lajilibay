const express = require('express');
const router = express.Router();

const ItemToSell = require('../models/ItemToSell');

router.post('/itemtosell/create', (req, res) => {
	const itemProperties = req.body;
	//TODO: add validation
	const itemToSell = new ItemToSell(req.body);
	itemToSell.save()
		.then(()=> {
			res.send(`Item ${itemProperties.name} was created`);
		})
		.catch(() => {
			res.status(500).send('Impossible to save to the database');
		});
});

router.get('/itemtosells', (req, res) => {
	console.log('route');
	ItemToSell.find()
		.then((itemtosells) => {
			res.status(200).json(itemtosells);
		})
		.catch(e => {
			res.status(500).send(e);
		});
});
console.log(router.stack);

module.exports = router;