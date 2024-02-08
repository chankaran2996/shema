// Importing mongoose 
import mongoose from "mongoose";

// Creating schema
const Movie = mongoose.Schema(
  // Adding the fielleds and their type
  {
    name : { type: String },
    poster : {type : String },
    trailer : { type: String },
    rating : { type : Number },
    summary: { type : String }
  },
  // Adding time stramps which used save datas timings entered in DB
  {
    timestamps: true,
  }
);

// Exporting schema
const Movie = mongoose.model("movie", movie);
export default Movie;
