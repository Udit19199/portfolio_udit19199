import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { z } from 'zod'

// Define a Zod schema for the expected frontmatter of a blog post
const BlogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  // uid and link are derived, not directly from frontmatter
  // date: z.string().datetime().optional(), // Example for a date field
});

export type BlogPost = z.infer<typeof BlogPostSchema> & {
  uid: string;
  link: string;
};

const postsDirectory = path.join(process.cwd(), 'app', 'blog')

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /app/blog
  const allPostFolders = fs.readdirSync(postsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const allPostsData = allPostFolders.map(folderName => {
    // Read MDX file as string
    const fullPath = path.join(postsDirectory, folderName, 'page.mdx');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    // Validate frontmatter using Zod
    const parsedData = BlogPostSchema.parse(data);

    const uid = folderName; // Use folder name as uid

    // Combine the data with the uid
    return {
      uid,
      title: parsedData.title,
      description: parsedData.description,
      link: `/blog/${uid}`, // Generate link based on uid
      // Add other frontmatter data fields here as needed
    } as BlogPost;
  });

  // Sort posts by uid for now (or add a date to frontmatter for proper sorting)
  // Assuming 'uid' (folder name) can imply order or simply using it for stable sorting
  return allPostsData.sort((a, b) => {
    if (a.uid < b.uid) {
      return 1;
    } else {
      return -1;
    }
  });
}
