import Router from "express";
import postController from "../controllers/postController";

const router = new Router();

router.post('/post', postController.createPost)
