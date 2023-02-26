import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const loader = multer({ dest: path.join(__dirname, 'tmp') });

export default loader;
