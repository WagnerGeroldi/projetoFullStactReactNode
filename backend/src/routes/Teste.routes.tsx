import Teste from "../controllers/TesteController";
import { Router } from "express";

const testeRoutes = Router();

testeRoutes.get("/", Teste.getData);

export { testeRoutes };
