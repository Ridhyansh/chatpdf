import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PUBLIC_ROUTES = ['/auth/login', '/auth/signup']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const path = router.pathname
    const isPublic = PUBLIC_ROUTES.includes(path)

    if (!token && !isPublic) {
      router.replace('/auth/login')
    } else if (token && isPublic) {
      router.replace('/')
    } else {
      setChecking(false)
    }
  }, [router.pathname])

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading...
      </div>
    )
  }

  return <Component {...pageProps} />
}
