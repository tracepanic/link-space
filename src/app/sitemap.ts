import { MetadataRoute } from 'next'
import db from '@/lib/db'

const baseUrl = 'https://spaces.tracepanic.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch all public spaces with user information
    const spaces = await db.space.findMany({
      where: { visibility: 'PUBLIC' },
      include: { user: true },
      orderBy: { updatedAt: 'desc' },
    })

    const sitemap: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ]

    // Group spaces by user to avoid duplicate user profile URLs
    const userSpaces = new Map<string, typeof spaces>()
    spaces.forEach((space) => {
      if (!userSpaces.has(space.userId)) {
        userSpaces.set(space.userId, [])
      }
      userSpaces.get(space.userId)!.push(space)
    })

    // Add user profile pages (one per user)
    userSpaces.forEach((userSpaceList, userId) => {
      const mostRecentSpace = userSpaceList[0]
      sitemap.push({
        url: `${baseUrl}/u/${userId}`,
        lastModified: mostRecentSpace.updatedAt,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })

    // Add individual space pages
    spaces.forEach((space) => {
      sitemap.push({
        url: `${baseUrl}/u/${space.userId}/${space.slug}`,
        lastModified: space.updatedAt,
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })

    return sitemap
  } catch (error) {
    console.error('Sitemap generation error:', error)
    // Return minimal sitemap on error
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ]
  }
}
