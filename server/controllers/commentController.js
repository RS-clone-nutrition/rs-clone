import Post from '../models/Post.js'
import { validationResult } from "express-validator";
import User from '../models/User.js';

class CommentController {
  async createComment(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Send comment error:' + ' ' + errors.array()[0].msg + '\n Please try it again' })
      }

      const { text, postId } = req.body;
      const user = req.user.id;

      const post = await Post.findOne({ _id: postId });
      post.comments.push({ text, user });

      const updatedPost = await Post.findOneAndUpdate({ _id: postId }, { comments: post.comments }, { returnDocument: 'after', strict: true });

      return res.status(200).json({
        message: 'Comment successfully loaded',
        post: updatedPost
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Comment load error' })
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
      const { postId, commentId } = req.body;
      const post = await Post.findOne({ _id: postId });

      const commentIndex = post.comments.findIndex((item) => item._id.toString() === commentId)
      post.comments.splice(commentIndex, 1);

      await post.save()

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
