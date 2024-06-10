import express from 'express'
import { AddOrders, AdminOrderDetail, AllOrders, DeleteOrder, EditProfile, Profile, SingalOrder } from '../controllers/orders';
import multer from 'multer';
import { Auth } from '../middleware/checkToken';

const router = express.Router()
const storageConfig = multer.diskStorage({
    destination: './uploads/',
    filename: function (req: any, file, cb) {
        cb(null, `${new Date().getTime()}-${file.originalname}`)
    },
})

var upload = multer({ storage: storageConfig })




router.post("/addorder", Auth, AddOrders)
router.get("/all-orders",Auth, AllOrders)
router.get("/order/:id",Auth, SingalOrder)
router.get("/admin-order/:id",Auth, AdminOrderDetail)
router.delete("/delete/order/:id",Auth, DeleteOrder)

router.get("/user/:id", Profile)
router.put("/update/user/:id", upload.any(), EditProfile)


export default router;
