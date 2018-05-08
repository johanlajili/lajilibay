const mongoose = require('mongoose');

const itemToSellSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
	},
	description: {
		type: String,
		trim: true,
	},
	pictures: [String],
	categories: [String],
	originalPrice: Number,
	auctions: [{
		value: Number,
		author: mongoose.Schema.Types.ObjectId,
	}],
});

module.exports = mongoose.model('ItemToSell', itemToSellSchema);

const ItemToSell = mongoose.model('ItemToSell');
