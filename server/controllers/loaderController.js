import { unlink } from 'fs/promises';
import { v2 as cloudinary } from 'cloudinary';


class loaderController {
  async sendAvatar(req, res) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      res.send(result);
      unlink(req.file.path);
    } catch (error) {
      res.send(error);
    }
  }
}

export default new loaderController();
