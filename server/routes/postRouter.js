import Router from "express";
import postContoller from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();

router.post('/post', authMiddleware, postContoller.createPost)
router.delete('/post', authMiddleware, postContoller.deletePost)
router.get('/posts', postContoller.getPosts)

export default router;
