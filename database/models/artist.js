// Todo: Create Artist Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema =  Schema({
	name: String,
	age: Number,
	yearsActive: Number,
	image: String,
	genre: String,
	website: String,
	netWorth: Number,
	labelName: String,
	retired: Boolean,
	Albums: [{
		type: Schema.Types.ObjectId,
		ref: 'album'		
	}]
});

const Artist = mongoose.model({ 'artist', ArtistSchema});

module.exports = Artist;