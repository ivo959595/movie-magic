import { create } from "express-handlebars";
import { v4 as uuid } from "uuid"
import movies from "../movies.js";

export default {
    getAll() {
        return movies;
    },
    findOne(movieId){
        const result = movies.find(movie => movie.id ==movieId)

        return result;
    },
    create(movieData) {
        const newId = uuid()

        movies.push({
            id: uuid,
            ...movieData,
        });

        return  newId
    }
}
