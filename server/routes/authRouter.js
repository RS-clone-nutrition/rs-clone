import Router from "express";
import authController from "../controllers/authController.js";
import { check } from "express-validator";
import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();

router.post('/login', [
  check('username', "username can't be empty").notEmpty(),
  check('weight', "weight can't be empty").notEmpty(),
  check('height', "height can't be empty").notEmpty(),
  check('age', "age can't be empty").notEmpty(),
  check('gender', "gender can't be empty").notEmpty(),
  check('goal', "goal can't be empty").notEmpty(),
  check('aim', "aim can't be empty").notEmpty(),
  check('activity', "activity can't be empty").notEmpty(),
  check('date', "date can't be empty").notEmpty(),
  check('password', "password must be longer than 4 and shorter than 10 characters").isLength({ min: 4, max: 10 }),
], authController.registration)
router.put('/user', [
  check('weight', "weight can't be empty").notEmpty(),
  check('goal', "goal can't be empty").notEmpty(),
  check('aim', "aim can't be empty").notEmpty(),
  check('activity', "activity can't be empty").notEmpty(),
], authController.updateUser)
router.post('/signup', authController.login)
router.get('/users', authMiddleware, authController.getUser)

export default router;
