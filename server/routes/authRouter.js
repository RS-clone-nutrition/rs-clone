import Router from "express";
import authController from "../controllers/authController.js";
import { check } from "express-validator";
import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();

router.post('/login', [
  check('username', "username can't be empty").notEmpty(),
  check('weight', "weight can't be empty").notEmpty(),
  check('goal', "goal can't be empty").notEmpty(), 
  check('height', "height can't be empty").notEmpty(),
  check('age', "age can't be empty").notEmpty(),
  check('gender', "gender can't be empty").notEmpty(),
  check('aim', "aim can't be empty").notEmpty(),
  check('activity', "activity can't be empty").notEmpty(),
  check('date', "date can't be empty").notEmpty(),
  check('password', "password must be longer than 4 and shorter than 10 characters").isLength({ min: 4, max: 10 }),
], authController.registration)

router.post('/signup', authController.login)

router.put('/user', [
  check('weight', "weight can't be empty").notEmpty(),
  check('goal', "goal can't be empty").notEmpty(),
  check('aim', "aim can't be empty").notEmpty(),
  check('activity', "activity can't be empty").notEmpty(),
], authMiddleware, authController.updateUser)

router.put('/avatar', [
  check('avatar', "Please upload your photo").notEmpty(),
], authMiddleware, authController.updateAvatar)

router.get('/user', authMiddleware, authController.getCurrentUser)
router.get('/members', authMiddleware, authController.getUsers)
router.get('/user:id', authMiddleware, authController.getUser)

export default router;
