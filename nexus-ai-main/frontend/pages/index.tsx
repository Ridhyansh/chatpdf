import { useState } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '../components/Sidebar'

// Dynamically import PDFViewer
const PDFViewer = dynamic(() => import('../components/PDFViewer'), {
  ssr: false,
  loading: () => <div>Loading PDF viewer...</div>
})

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [summary, setSummary] = useState('')
  const [codeBlocks, setCodeBlocks] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Reset states
    setError(null)
    setFile(null)
    setPdfUrl(null)

    // Validate file type
    if (!file.type.includes('pdf')) {
      setError('Please upload a PDF file')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') || '/api'
      const uploadUrl = `${apiBase}/upload`
      console.log('Attempting to upload to:', uploadUrl)
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const response = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
      'Accept': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: formData,
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Upload failed:', response.status, errorText)
        throw new Error(`Upload failed: ${response.status} ${errorText}`)
      }
      
  const data = await response.json()
      
      if (data.error) {
        setError(data.error)
        return
      }

  setFile(file)
  // Always use absolute URL provided by backend (CORS now supports localhost)
  setPdfUrl(data.url)
    } catch (error: any) {
      console.error('Error uploading file:', error)
      setError(`Failed to upload file: ${error.message || 'Please try again.'}`)
    }
  }

  return (
    <div className="flex h-screen bg-white">
      <Sidebar 
        onFileUpload={handleFileUpload}
        summary={summary}
        codeBlocks={codeBlocks}
      />
      <main className="flex-1 p-4">
        {error ? (
          <div className="flex items-center justify-center h-full text-red-500">
            {error}
          </div>
        ) : pdfUrl ? (
          <PDFViewer file={pdfUrl} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Upload a PDF to get started
          </div>
        )}
      </main>
    </div>
  )
}
