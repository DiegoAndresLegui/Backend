import { Router } from "express";
import ManagerProducts from "../classes/ProductsManager.class.js";

const router = Router();

const productManager = new productsManager()

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await productManager.consultarProductoPorId(id);
  res.send({ product });
});

router.get("/", async (req, res) => {
  const product = await managerProducts.consultarProductos();
  res.send({ products });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const product = req.body;

  managerProducts.crearProducto(product);
  res.send({ status: "success" });
});

export default router;