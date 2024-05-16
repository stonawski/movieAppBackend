// models.js

// Import mongoose module
const mongoose = require("mongoose");

// Define Schema for Movies
const movieSchema = new mongoose.Schema({
  adult: Boolean,
  backdrop_path: String,
  id: Number,
  title: String,
  original_language: String,
  original_title: String,
  overview: String,
  poster_path: String,
  media_type: String,
  genre_ids: [Number],
  popularity: Number,
  release_date: Date,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
});

// Define Schema for Users
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  surname: String,
  age: Number,
  nickname: String,
  password: String,
  moviesToWatch: [movieSchema],
});

// Define User model
const User = mongoose.model("User", userSchema);

// Define Movie model
const Movie = mongoose.model("Movie", movieSchema);

// Export models
module.exports = { User, Movie };
