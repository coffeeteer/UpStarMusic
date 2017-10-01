// Todo: create Album Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = Schema({
	title: String,
	date: Date,
	copiesSold: Number,
	numberTracks: Number,
	image: String,
	revenue: Number
});

const Album = mongoose.model({ 'album', AlbumSchema});

module.export = Album;