import express from "express";
import handlebars from "express-handlebars";
import showRatingHelper from "./helpers/rating-helper.js";
import routes  from "./routes.js";
import mongoose from "mongoose";
import "dotenv/config"
import cookieParser from "cookie-parser";

const app = express();

try {
    const defaultUri = "mongodb://localhost:27017/magic-movies-jan2025"
    await mongoose.connect(process.env.DATABASE_URI ?? defaultUri)

    console.log('db connected')
} catch (error) {
  console.error(error.message)
}



app.engine( "hbs", handlebars.engine({
    extname: "hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,

    },
    helpers: {
      showRating: showRatingHelper,
    }
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use("/static", express.static("src/public"));
app.use(express.urlencoded({extended: false}))
app.use(cookieParser)

app.use(routes);

app.listen(5000, () => console.log("Listening on port 5000"));
