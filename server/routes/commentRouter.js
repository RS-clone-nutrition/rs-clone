import Router from "express";
import commentContoller from "../controllers/commentController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { check } from "express-validator";

const router = new Router();

router.post('/comment',
  [check('text', "text can't be empty").notEmpty(),],
  authMiddleware, commentContoller.createComment)

router.delete('/comment', authMiddleware, commentContoller.deleteComment)
// router.get('/comments', commentContoller.getComments)

export default router;
