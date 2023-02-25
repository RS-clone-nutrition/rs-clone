import Post from '../models/Post.js'

class PostController {
  async createPost(req, res) {

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Send post error:' + ' ' + errors.array()[0].msg + '\n Please try it again' })
      }

      const { text } = req.body;
      const user = req.user.id;

      const post = new Post({ text, user });

      const savedPost = await post.save();

      console.log(savedPost);

      return res.status(200).json({
        message: 'post successfully loaded'
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Post load error' })
    }


  }
}

export default new PostController();
