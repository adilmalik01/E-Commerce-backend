import express, { Request, Response } from "express";
import multer from "multer";
import { DeleteProduct, addProduct, update_Product } from "../controllers/product";
import { Auth } from "../middleware/checkToken";
import {
  Allproducts,
  HomePage,
  filterdProduct,
  singalProduct,
} from "../controllers/product";
import client from "../database/mongodb";

let category_db: any = client.db("e-commerce").collection("category");

const router = express.Router();

const storageConfig = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req: any, file, cb) {
    cb(null, `${new Date().getTime()}-${file.originalname}`);
  },
});

var upload = multer({ storage: storageConfig });

router.post("/addproduct", Auth, upload.any(), addProduct);
router.get("/allproducts", Allproducts);
router.delete("/delete-product/:id", Auth, DeleteProduct);
router.put("/update-product/:id", Auth, upload.any(), update_Product);
router.get("/product/:id", singalProduct);
router.post("/filter-product", filterdProduct);
router.get("/arrival-product/:query", HomePage);
router.get("/categorys", async function (req: Request, res: Response) {
  try {
    let result = await category_db.find({});
    let cursor = await result.toArray();
    res.send(cursor);
  } catch (e) {
    res.send({ error: e, message: "error in get all" });
  }
});


export default router;
