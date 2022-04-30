import { Router } from "express";
import { homeRoutes } from "./Home.routes";
import { testeRoutes } from "./Teste.routes";

const router = Router();

router.use("/", homeRoutes);
router.use("/teste", testeRoutes);

export { router };
