import { createServerFileRoute } from '@tanstack/react-start/server'

const GITHUB_USERNAME = 'isaacthisdel-hue'

export const ServerRoute = createServerFileRoute('/ar/$').methods({
  GET: async ({ request, params }) => {
    const slug = params['_splat'] || ''
    const parts = slug.split('/').filter(Boolean)

    if (parts.length === 0) {
      return new Response(null, {
        status: 302,
        headers: { Location: 'https://servision.ca' }
      })
    }

    const restaurantSlug = parts[0]
    const rest = parts.slice(1).join('/')
    const repoName = 'ar-' + restaurantSlug
    const githubPath = rest
      ? `/${repoName}/${rest}/`
      : `/${repoName}/`

    // Fetch from GitHub Pages and return directly
    const githubUrl = `https://${GITHUB_USERNAME}.github.io${githubPath}`

    const response = await fetch(githubUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 Servision-Proxy/1.0',
        'Accept': request.headers.get('accept') || '*/*',
      },
      redirect: 'follow'
    })

    const contentType = response.headers.get('content-type') || 'text/html'
    const body = await response.arrayBuffer()

    return new Response(body, {
      status: response.status,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=300',
        'Access-Control-Allow-Origin': '*',
      }
    })
  }
})
