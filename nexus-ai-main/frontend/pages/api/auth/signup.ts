import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const backend = (process.env.BACKEND_BASE_URL || 'http://localhost:8000').replace(/\/$/, '')
    const upstream = await fetch(`${backend}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    })
    const data = await upstream.json()
    return res.status(upstream.status).json(data)
  } catch (e: any) {
    console.error('Auth signup proxy error:', e)
    return res.status(500).json({ error: 'Proxy error', detail: e.message })
  }
}
