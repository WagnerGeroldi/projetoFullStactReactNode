import { Request, Response } from "express";

class HomeController {

    getData(req: Request, res: Response) {

        res.status(200).json("Oi eu sou um conteúdo vindo do backend");

    }



}

export default new HomeController();