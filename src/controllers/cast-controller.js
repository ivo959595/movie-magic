import { Router } from "express";
import castService from "../services/cast-service.js";

const castControler = Router();

castControler.get("/create", (req, res) => {
  res.render("cast/create");
});


castControler.post("/create", async (req, res) => {
  const castData = req.body
  await castService.create(castData)


  res.redirect("/")
})

export default castControler;
