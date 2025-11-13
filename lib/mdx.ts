import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface MdxFrontmatter {
  title: string
  description?: string
  date?: string
  [key: string]: any
}

export interface MdxContent {
  frontmatter: MdxFrontmatter
  content: string
  slug: string
}

/**
 * Read and parse an MDX file from the content directory
 */
export async function getMdxContent(slug: string): Promise<MdxContent | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      frontmatter: data as MdxFrontmatter,
      content,
      slug,
    }
  } catch (error) {
    console.error(`Error reading MDX file: ${slug}`, error)
    return null
  }
}

/**
 * Get all MDX file slugs from the content directory
 */
export function getAllMdxSlugs(): string[] {
  try {
    const files = fs.readdirSync(contentDirectory)
    return files
      .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
      .map((file) => file.replace(/\.mdx?$/, ''))
  } catch (error) {
    console.error('Error reading content directory', error)
    return []
  }
}

/**
 * Get all MDX content
 */
export async function getAllMdxContent(): Promise<MdxContent[]> {
  const slugs = getAllMdxSlugs()
  const content = await Promise.all(
    slugs.map((slug) => getMdxContent(slug))
  )
  return content.filter((item): item is MdxContent => item !== null)
}
