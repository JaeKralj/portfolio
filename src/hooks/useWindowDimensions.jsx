import { useEffect, useState } from 'react'

function getWindowsDimensions() {
  const { innerWidth: width } = window
  return { width }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowsDimensions()
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowsDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
