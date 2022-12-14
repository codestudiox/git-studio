import React, { useEffect } from "react"

export default function Navigat1() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("https//:usewholebrain.com")
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  return <>Will redirect in 3 seconds...</>
}

