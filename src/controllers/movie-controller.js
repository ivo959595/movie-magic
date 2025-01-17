import { Router } from "express";
import { create } from "express-handlebars";

const movieController = Router();

import movieService from "../services/movie-service.js";

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.get("/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;

  const movie = movieService.findOne(movieId);

  res.render("details");
});

export default movieController;
