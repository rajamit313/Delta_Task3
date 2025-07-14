import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  city: String,
  theatre: String,
  date: String, // Format: YYYY-MM-DD
},{ collection: "movie"});

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);
export default Movie;
