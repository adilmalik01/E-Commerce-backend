import express from 'express'
// import multer from 'multer'
import { Login, Logout, Signup, AllUsers, forgetPassowrd, ReceivedOtp, updatePassword, delete_User, update_user, Admins } from '../controllers/auth'
import { Auth } from '../middleware/checkToken'


const router = express.Router()



/**
 * @swagger
 * /signup:
 *   post:
 *     description: Register a new user
 *     responses:
 *       200:
 *         description: User registered successfully
 */
router.post("/signup", Signup);

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login user
 *     responses:
 *       200:
 *         description: User logged in successfully
 */
router.post("/login", Login);

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
router.post("/logout", Auth, Logout);

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
router.delete("/delete-user/:id", Auth, delete_User);

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
router.put("/update-user/:id", Auth, update_user);

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
router.get("/admins", Auth, Admins);

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
router.get("/allusers", Auth, AllUsers);

/**
 * @swagger
 * /forget-password:
 *   post:
 *     description: Request to reset password
 *     responses:
 *       200:
 *         description: Password reset request successful
 */
router.post("/forget-password", forgetPassowrd);

/**
 * @swagger
 * /otp-send:
 *   post:
 *     description: Send OTP to user for password reset
 *     responses:
 *       200:
 *         description: OTP sent successfully
 */
router.post("/otp-send", ReceivedOtp);

/**
 * @swagger
 * /reset-password:
 *   post:
 *     description: Reset user's password
 *     responses:
 *       200:
 *         description: Password reset successful
 */
router.post("/reset-password", updatePassword);


export default router;
