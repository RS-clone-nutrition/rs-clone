import Router from "express";
import loader from "../middleware/loaderMiddleware.js";
import loaderContoller from "../controllers/loaderContoller.js";

const router = new Router();


router.post('/avatar', loader.single('avatar'), loaderContoller.sendAvatar)

export default router;
