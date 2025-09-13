import type { NextApiRequest, NextApiResponse } from 'next'
import { IncomingMessage } from 'http'

// Disable Next.js default body parsing so we can stream the multipart form-data directly.
export const config = {
  api: {
    bodyParser: false,
    sizeLimit: '50mb',
  },
}

/**
 * Proxies PDF upload requests to the backend FastAPI service.
 * Frontend sends POST /api/upload with multipart/form-data (field name: file)
 * This route forwards the raw request stream preserving headers to the backend `/upload` endpoint.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    return res.status(200).json({ message: 'OK' })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const backendBase = process.env.BACKEND_BASE_URL || 'http://localhost:8000'
    const targetUrl = `${backendBase.replace(/\/$/, '')}/upload`

    // Collect raw multipart body (avoid streaming which requires fetch duplex in some runtimes)
    // Stream directly (Node 18 requires duplex when a Readable stream/body is provided)
  const upstream = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/octet-stream',
        'Accept': 'application/json',
    ...(req.headers['authorization'] ? { 'Authorization': String(req.headers['authorization']) } : {})
      },
      // @ts-ignore - Node's experimental fetch types may not include duplex yet
      duplex: 'half',
      // @ts-ignore Allow passing the request stream directly
      body: req as any,
    })

    const text = await upstream.text()
    let data: any
    try {
      data = JSON.parse(text)
    } catch {
      data = { raw: text }
    }

    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: 'Upload failed', detail: data })
    }

    return res.status(200).json(data)
  } catch (err: any) {
    console.error('Proxy upload error:', err)
    return res.status(500).json({ error: 'Proxy error', detail: err?.message })
  }
}
