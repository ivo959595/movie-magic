import { Router } from "express";
import { create } from "express-handlebars";
import castService from "../services/cast-service.js";

const movieController = Router();

import movieService from "../services/movie-service.js";

movieController.get("/search",async (req, res) => {
    const filter = req.query
    const movies = await movieService.getAll(filter)
    res.render('search', { movies, filter });
})

movieController.get("/create", (req, res) => {
  res.render("create");
});

movieController.post("/create", async (req, res) => {
  const newMovie = req.body;

  
  res.redirect('/');
});

movieController.get("/:movieId/details", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOneWithCasts(movieId);



  res.render("movie/details", { movie });
});


movieController.get('/:movieId/attach-cast', async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId);
  const casts = await castService.getAll()  

  res.render('movie/attach-cast', { movie, casts });
});


movieController.post('/:movieId/attach-cast', async (req,res)=> {

  const castId = req.body.cast;
  const movieId = req.params.movieId
  await movieService.attachCast(movieId, castId);



  res.redirect(`/movies/${movieId}/details`)
})



export default movieController;
