import { Request, Response } from "express";
import { createMovieService, deleteMovieService, readMovieService, updateMovieService } from "../services/movies.services";
import { Movie } from "../entities";
import { Pagination } from "../interfaces/pagination.interface";

export const createMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movie: Movie = await createMovieService(req.body);

    return res.status(201).json(movie);
};

export const readMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movies: Pagination = await readMovieService(res.locals.pagination);

    return res.status(200).json(movies);
};

export const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
    const { verifyId } = res.locals;
    const { body } = req;
    const movie: Movie = await updateMovieService(verifyId, body);

    return res.status(200).json(movie);
};

export const deleteMovieController = async (req: Request, res: Response): Promise<Response> => {

    await deleteMovieService(res.locals.verifyId);

    return res.status(204).json();
};