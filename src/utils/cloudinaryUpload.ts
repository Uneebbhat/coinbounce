import { v2 as cloudinary } from "cloudinary";
import cloudinaryConfig from "@/config/cloudinaryConfig";

cloudinaryConfig();

interface CloudinaryUpload {
  filepath: string;
  options: {};
}

const cloudinaryUpload = async ({
  filepath,
  options = {},
}: CloudinaryUpload) => {
  return await cloudinary.uploader.upload(filepath, (options = {}));
};

export default cloudinaryUpload;
