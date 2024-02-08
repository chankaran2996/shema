// Importing express
import express from "express";

// importing all controlles
import {
  getMovies,
  getMovieByID,
  createMovies,
  deleteMovieByID,
  updateMovieByID,
} from "path";

// creating new router object
const dbRoute = express.Router();

// get methods

// Fectch all movies
router.get("/", getMovies);

// Fectch movie by ID
router.get("/:id", getMovieByID);

// post methods

// creating movie in DB
router.post("/",createMovies);

// delete methods

// delete movie by ID
router.delete("/:id",deleteMovieByID);

// put methods

// Edit movie by ID
router.put("/:id",updateMovieByID);
