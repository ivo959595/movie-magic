import { Router } from "express";

const castControler = Router();

castControler.get("/create", (req, res) => {
  res.render("cast/create");
});

export default castControler;
