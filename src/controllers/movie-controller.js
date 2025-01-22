import { Router } from "express";
import { create } from "express-handlebars";

const movieController = Router();

import movieService from "../services/movie-service.js";

movieController.get("/search", (req, res) => {
    const filter = req.query
    const movies = movieService.getAll(filter)
    res.render('search', {movies})
})

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.post("/create", (req, res) => {
  const newMovie = req.body;
  movieService.create(newMovie)
  res.redirect('/');
});

movieController.get("/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;
  const movie = movieService.findOne(movieId);
  res.render("details", { movie });
});

export default movieController;
