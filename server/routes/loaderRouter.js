import Router from "express";
import loader from "../middleware/loaderMiddleware.js";
import loaderContoller from "../controllers/loaderController.js";

const router = new Router();


router.post('/avatar', loader.single('avatar'), loaderContoller.sendAvatar)

export default router;
