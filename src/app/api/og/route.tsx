import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title')
    const description = searchParams.get('description')

    if (!title) {
      return new Response('Missing title parameter', { status: 400 })
    }

    // Truncate title and description
    const truncatedTitle = title.length > 60 ? title.slice(0, 60) + '...' : title
    const truncatedDescription = description && description.length > 120
      ? description.slice(0, 120) + '...'
      : description

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: 'Inter, sans-serif',
            padding: '80px',
          }}
        >
          {/* LinkSpace branding */}
          <div
            style={{
              position: 'absolute',
              top: '60px',
              fontSize: '24px',
              color: 'white',
              fontWeight: '600',
              letterSpacing: '0.5px',
            }}
          >
            LinkSpace
          </div>

          {/* Space title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.2,
              marginBottom: truncatedDescription ? '30px' : '0',
            }}
          >
            {truncatedTitle}
          </div>

          {/* Space description */}
          {truncatedDescription && (
            <div
              style={{
                fontSize: '32px',
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                maxWidth: '900px',
                lineHeight: 1.4,
              }}
            >
              {truncatedDescription}
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('OG image generation error:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
