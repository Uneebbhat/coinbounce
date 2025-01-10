import { z } from "zod";

const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.string(),
  author: z.object({
    authorId: z.string(),
    authorName: z.string(),
    authorPic: z.string(),
  }),
});

export default BlogSchema;
