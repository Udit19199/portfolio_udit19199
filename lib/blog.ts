import fs from 'fs'
import path from 'path'

export type BlogPost = {
  uid: string
  title: string
  description: string
  link: string
}

const postsDirectory = path.join(process.cwd(), 'app', 'blog')

export function getSortedPostsData(): BlogPost[] {
  const allPostFolders = fs.readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith('_'))
    .map((dirent) => dirent.name)

  const allPostsData = allPostFolders.map((folderName) => {
    const fullPath = path.join(postsDirectory, folderName, 'page.mdx')
    
    // Check if file exists to avoid errors if a folder is empty or has different structure
    if (!fs.existsSync(fullPath)) {
        return null; 
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Simple Regex to extract title and description from the exported metadata object
    const titleMatch = fileContents.match(/title:\s*['"](.+?)['"]/)
    const descriptionMatch = fileContents.match(/description:\s*['"](.+?)['"]/)

    const title = titleMatch ? titleMatch[1] : folderName
    const description = descriptionMatch ? descriptionMatch[1] : ''

    return {
      uid: folderName,
      title,
      description,
      link: `/blog/${folderName}`,
    }
  }).filter((post): post is BlogPost => post !== null); // Filter out any nulls

  return allPostsData.sort((a, b) => (a.uid < b.uid ? 1 : -1))
}