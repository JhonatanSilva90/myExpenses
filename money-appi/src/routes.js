import { Router } from "express";
import controllerDespesa from "./controllers/controller.despesa.js";
import controllerCategoria from "./controllers/controller.categoria.js";

const router = Router();
router.get("/categorias", controllerCategoria.Listar);

router.get("/despesas", controllerDespesa.Listar);
router.get("/despesas/:id", controllerDespesa.ListarId);
router.post("/despesas", controllerDespesa.Inserir);
router.put("/despesas/:id", controllerDespesa.Editar);
router.delete("/despesas/:id", controllerDespesa.Excluir);

export default router;
