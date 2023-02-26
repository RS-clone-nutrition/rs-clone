import Post from '../models/Post.js'
import { validationResult } from "express-validator";
import User from '../models/User.js';

class CommentController {
  async createComment(req, res) {
    console.log('br');
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Send post error:' + ' ' + errors.array()[0].msg + '\n Please try it again' })
      }

      const { text, id } = req.body;
      const user = req.user.id;

      const post = await Post.findOne({ _id: id });
      post.comments.push({ text, user });

      const updatedPost = await Post.findOneAndUpdate({ _id: id }, { comments: post.comments }, { returnDocument: 'after', strict: true });

      return res.status(200).json({
        message: 'post successfully loaded'
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Post load error' })
    }
  }

  // async getComments(req, res) {
  //   try {
  //     const posts = await Post.find();
  //     const user = await User.findOne({ _id: posts[0].user })

  //     const postsWithUser = await Promise.all(posts.map(async (post) => {
  //       const user = await User.findOne({ _id: post.user });
  //       return { post, user };
  //     }))

  //     res.status(200).json(postsWithUser)
  //   } catch (e) {
  //     console.log(e);
  //     res.status(400).json({ message: 'get posts error' })
  //   }
  // }

  async deleteComment(req, res) {
    try {
      const { id } = req.body;
      const post = await Post.deleteOne({ comments: { _id: id } });

      return res.status(200).json({
        message: 'comment successfully deleted'
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Comment delete error' })
    }
  }
}

export default new CommentController();
