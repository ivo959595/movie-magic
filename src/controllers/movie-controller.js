import { Router } from "express";
import { create } from "express-handlebars";

import { findMovie } from "../services/movie-service.js";
const movieController = Router();

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.get('/:movieId/details', (req, res) => {
  const movieId = req.params.movieId

  const movie = findMovie(movieId)

  

  res.render('details')
});

export default movieController;
