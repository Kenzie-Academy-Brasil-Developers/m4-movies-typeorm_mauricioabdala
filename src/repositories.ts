import { Repository } from "typeorm";
import { Movie } from "./entities";
import { AppDataSource } from "./data-source";

export const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);