import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ThemeNavigate() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/invoices/1995", { replace: true })
    }, 3000)
  }, [navigate])
  return <div>Redirecting...</div>
}
