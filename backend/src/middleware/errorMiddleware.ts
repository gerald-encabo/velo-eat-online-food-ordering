import { Response } from "express";
import { isHttpError } from "http-errors";

const errorHandler = (error: unknown, res: Response) => {

    console.error(error);
    let errorMessage = "An unknown error occured";
    let statusCode = 500;

    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
}

export default errorHandler 
