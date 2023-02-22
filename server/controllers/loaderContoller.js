import { unlink } from 'fs/promises';
import { v2 as cloudinary } from 'cloudinary';


class loaderController {
  async sendAvatar(req, res) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
    unlink(req.file.path);
  }
}

export default new loaderController();
