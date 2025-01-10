import { z } from "zod";

const UserSchema = z.object({
  username: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(8),
  profilePic: z.string().optional(),
});

export default UserSchema;
