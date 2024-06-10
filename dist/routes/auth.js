"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import multer from 'multer'
const auth_1 = require("../controllers/auth");
const checkToken_1 = require("../middleware/checkToken");
const router = express_1.default.Router();
/**
 * @swagger
 * /signup:
 *   post:
 *     description: Register a new user
 *     responses:
 *       200:
 *         description: User registered successfully
 */
router.post("/signup", auth_1.Signup);
/**
 * @swagger
 * /login:
 *   post:
 *     description: Login user
 *     responses:
 *       200:
 *         description: User logged in successfully
 */
router.post("/login", auth_1.Login);
/**
 * @swagger
 * /logout:
 *   post:
 *     description: Logout user
 *     security:
 *       - JWT: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
router.post("/logout", checkToken_1.Auth, auth_1.Logout);
/**
 * @swagger
 * /delete-user/{id}:
 *   delete:
 *     description: Delete a user
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
router.delete("/delete-user/:id", checkToken_1.Auth, auth_1.delete_User);
/**
 * @swagger
 * /update-user/{id}:
 *   put:
 *     description: Update user information
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to update
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User information updated successfully
 */
router.put("/update-user/:id", checkToken_1.Auth, auth_1.update_user);
/**
 * @swagger
 * /admins:
 *   get:
 *     description: Get list of admins
 *     security:
 *       - JWT: []
 *     responses:
 *       200:
 *         description: List of admins retrieved successfully
 */
router.get("/admins", checkToken_1.Auth, auth_1.Admins);
/**
 * @swagger
 * /allusers:
 *   get:
 *     description: Get list of all users
 *     security:
 *       - JWT: []
 *     responses:
 *       200:
 *         description: List of all users retrieved successfully
 */
router.get("/allusers", checkToken_1.Auth, auth_1.AllUsers);
/**
 * @swagger
 * /forget-password:
 *   post:
 *     description: Request to reset password
 *     responses:
 *       200:
 *         description: Password reset request successful
 */
router.post("/forget-password", auth_1.forgetPassowrd);
/**
 * @swagger
 * /otp-send:
 *   post:
 *     description: Send OTP to user for password reset
 *     responses:
 *       200:
 *         description: OTP sent successfully
 */
router.post("/otp-send", auth_1.ReceivedOtp);
/**
 * @swagger
 * /reset-password:
 *   post:
 *     description: Reset user's password
 *     responses:
 *       200:
 *         description: Password reset successful
 */
router.post("/reset-password", auth_1.updatePassword);
exports.default = router;
