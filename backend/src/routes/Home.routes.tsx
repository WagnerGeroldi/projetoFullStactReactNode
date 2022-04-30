import Home from "../controllers/HomeController";
import { Router } from "express";

const homeRoutes = Router();

homeRoutes.get("/", Home.getData);

export { homeRoutes };
