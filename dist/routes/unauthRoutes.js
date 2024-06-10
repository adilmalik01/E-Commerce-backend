"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = __importDefault(require("../database/mongodb"));
let category_db = mongodb_1.default.db("e-commerce").collection("category");
const router = express_1.default.Router();
// router.post("/arrival-product", filterdProduct);
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
