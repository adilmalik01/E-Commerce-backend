"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const product_1 = require("../controllers/product");
const checkToken_1 = require("../middleware/checkToken");
const product_2 = require("../controllers/product");
const mongodb_1 = __importDefault(require("../database/mongodb"));
let category_db = mongodb_1.default.db("e-commerce").collection("category");
const router = express_1.default.Router();
const storageConfig = multer_1.default.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
        cb(null, `${new Date().getTime()}-${file.originalname}`);
    },
});
var upload = (0, multer_1.default)({ storage: storageConfig });
router.post("/addproduct", checkToken_1.Auth, upload.any(), product_1.addProduct);
router.get("/allproducts", product_2.Allproducts);
router.delete("/delete-product/:id", checkToken_1.Auth, product_1.DeleteProduct);
router.put("/update-product/:id", checkToken_1.Auth, upload.any(), product_1.update_Product);
router.get("/product/:id", product_2.singalProduct);
router.post("/filter-product", product_2.filterdProduct);
router.get("/arrival-product/:query", product_2.HomePage);
router.get("/categorys", async function (req, res) {
    try {
        let result = await category_db.find({});
        let cursor = await result.toArray();
        res.send(cursor);
    }
    catch (e) {
        res.send({ error: e, message: "error in get all" });
    }
});
exports.default = router;
