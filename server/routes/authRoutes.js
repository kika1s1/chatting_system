import { Router } from "express";
import { registerUser } from "../controllers/register.js";
import checkEmail from "../controllers/checkEmail.js";
import checkPassword from "../controllers/checkPassword.js";
import userDetail from "../controllers/userDetail.js";
import logout from "../controllers/logout.js";
import updateUserDetail from "../controllers/updateUserDetail.js";
const router = Router();
// create register api
router.post("/register", registerUser);

// check user email
router.post("/email", checkEmail);

// check password correctness
router.post("/password", checkPassword);

// get userDetail
router.get("/user-detail", userDetail);

// logout user
router.post("/logout", logout);

// update user detail
router.put("/update-user", updateUserDetail);

// create login api

export default router;
