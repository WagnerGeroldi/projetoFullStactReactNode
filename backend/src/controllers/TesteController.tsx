import { Request, Response } from "express";

class TesteController {
  getData(req: Request, res: Response) {
    res.status(200).json({ name: "Wagner", phone: "54996366433" });
  }
}

export default new TesteController();
