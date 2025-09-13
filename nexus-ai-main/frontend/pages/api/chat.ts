import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: true,
    sizeLimit: '1mb'
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message, pdf_url } = req.body || {}
    if (!message || !pdf_url) {
      return res.status(400).json({ error: 'Missing message or pdf_url' })
    }

    const backendBase = process.env.BACKEND_BASE_URL?.replace(/\/$/, '') || 'http://localhost:8000'
    const upstream = await fetch(`${backendBase}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers['authorization'] ? { 'Authorization': String(req.headers['authorization']) } : {})
      },
      body: JSON.stringify({ message, pdf_url })
    })

    const text = await upstream.text()
    let data: any
    try { data = JSON.parse(text) } catch { data = { raw: text } }

    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: 'Chat upstream failed', detail: data })
    }

    return res.status(200).json(data)
  } catch (e: any) {
    console.error('Chat proxy error:', e)
    return res.status(500).json({ error: 'Proxy error', detail: e?.message })
  }
}
