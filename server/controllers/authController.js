import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import secret from "../config.js";

const generateAccessToken = (id) => {
  const payload = {
    id
  }

  return jwt.sign(payload, secret.key)
}

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Registration error:' + ' ' + errors.array()[0].msg + '\n Please fill in all fields' })
      }

      const { username, password, weight, height, age, gender, goal, aim, activity, date } = req.body;

      const candidate = await User.findOne({ username })

      if (candidate) {
        return res.status(400).json({ message: 'user already exists' })
      }

      const hashPassword = bcrypt.hashSync(password, 3);
      const user = new User({
        username: username, password: hashPassword, weight: weight, goal: goal, height: height,
        age: age, gender: gender, goal: goal, aim: aim, activity: activity, date: date
      })

      await user.save()

      return res.status(200).json({
        message: 'user successfully registered'
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' })
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })

      if (!user) {
        return res.status(400).json({ message: `user with name ${username} not found` })
      }

      const validPassword = bcrypt.compareSync(password, user.password)

      if (!validPassword) {
        return res.status(400).json({ message: `incorrect password` })
      }

      const token = generateAccessToken(user._id)

      return res.status(200).json({ message: 'user successfully authorized', token: token, user: user });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' })
    }
  }

  async updateUser(req, res) {
    try {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Save error:' + ' ' + errors.array()[0].msg + '\n Please fill in all fields' })
      }

      const { weight, goal, aim, username, activity, bio } = req.body
      const dataForUpdate = { goal: goal, aim: aim, activity: activity, bio: bio }

      const id = req.user.id;
      const user = await User.findOne({ _id: id });

      if (user.weight[user.weight.length - 1] !== weight) {
        dataForUpdate.weight = user.weight.concat(weight);
        dataForUpdate.date = user.date.concat(new Date().toString())
      }

      const userUpdated = await User.findOneAndUpdate({ _id: id }, dataForUpdate, { returnDocument: 'after' });

      return res.status(200).json({ message: 'user successfully updated', user: userUpdated });
    } catch (e) {
      console.log(e);
    }
  }

  async updateAvatar(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Update error:' + ' ' + errors.array()[0].msg })
      }

      const avatar = req.body.avatar;
      const id = req.user.id;

      const userUpdated = await User.findOneAndUpdate({ _id: id }, { avatar: avatar }, { returnDocument: 'after' });

      return res.status(200).json({ message: 'user avatar successfully updated' });
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  }

  async getCurrentUser(req, res) {
    try {
      const id = req.user.id;
      const user = await User.find({ _id: id });
      res.status(200).json(user)
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'get error' })
    }
  }

  async getUser(req, res) {
    try {
      const userIdSearch = req.params.id.slice(1);
      const userIdCurrent = req.user.id;

      const user = await User.findOne({ _id: userIdSearch });
      if (userIdSearch === userIdCurrent) user.owner = true;
      res.status(200).json(user)
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'get error' })
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find({});
      res.status(200).json(users)
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'get error' })
    }
  }
}

export default new authController();
