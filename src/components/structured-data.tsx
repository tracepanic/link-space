import { SpaceWithBlocks } from '@/types'

interface StructuredDataProps {
  space: SpaceWithBlocks
  userId: string
}

export default function StructuredData({ space, userId }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: space.title,
      description: space.description || '',
      url: `https://spaces.tracepanic.com/u/${userId}`,
    },
    dateModified: space.updatedAt.toISOString(),
    datePublished: space.createdAt.toISOString(),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
