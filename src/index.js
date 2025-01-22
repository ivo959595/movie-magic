import express from "express";
import handlebars from "express-handlebars";
import showRatingHelper from "./helpers/rating-helper.js";
import routes  from "./routes.js";

const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    helpers: {
      showRating: showRatingHelper,
    }
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use("/static", express.static("src/public"));
app.use(express.urlencoded({extended: false}))



app.use(routes);

app.listen(5000, () => console.log("Listening on port 5000"));
