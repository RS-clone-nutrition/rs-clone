import User from "../models/User.js";
import { validationResult } from "express-validator";



class authController {
  async registration(req, res) {
    try {
      const { username, password, weight, height, age, gender } = req.body

      const user = new User({ username: username, password: hashPassword, weight: weight, goal: goal, height: height, age: age, gender: gender })

      await user.save()

      return res.status(200).json({
        message: 'user successfully registered'
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' })
    }
  }

}

export default new authController();
