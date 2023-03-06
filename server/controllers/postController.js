import Post from '../models/Post.js'
import { validationResult } from "express-validator";
import User from '../models/User.js';

class PostController {
  async createPost(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Send post error:' + ' ' + errors.array()[0].msg + '\n Please try it again' })
      }

      const { text, icon } = req.body;
      const user = req.user.id;

      const post = new Post({ text, user, icon });

      const savedPost = await post.save();

      return res.status(200).json({
        post: savedPost,
        message: 'post successfully loaded',
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Post load error' })
    }
  }

  async getPosts(req, res) {
    try {
      const posts = await Post.find();
      const user = await User.findOne({ _id: posts[0].user })

      const postsWithUser = await Promise.all(posts.map(async (post) => {
        const user = await User.findOne({ _id: post.user });
        return { post, user };
      }))

      res.status(200).json(postsWithUser)
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'get posts error' })
    }
  }

  async deletePost(req, res) {
    try {
      const { id } = req.body;
      const post = await Post.deleteOne({ _id: id });

      return res.status(200).json({
        message: 'post successfully deleted'
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Post delete error' })
    }
  }
}

export default new PostController();
