import React from "react"
import { Outlet, useParams } from "react-router-dom"
import { getTheme } from "./data"

export default function Theme() {
  let params = useParams()
  let themeNumber = parseInt(params.themeId)
  console.log(themeNumber)
  let theme = getTheme(themeNumber)
  console.log(theme)

  // Let's navigate
  //  #1 Method
  // window.location.replace("https://usewholebrain.com")
  // #2 Method
  // window.location.href = "https://codefrontend.com"
  // #3 Link with a tag
  // #4 react router useNavigation
  

  //  #2
  return (
    <>
    <a href="https://codefrontend.com" target="_blank" rel="noopener noreferrer">
  Go to codefrontend.com
</a>
      <h2>Theme: {params.themeId}</h2>
      <p>Name: {theme.name}</p>
      <p>amount: {theme.amount}</p>
      <p>due: {theme.due}</p>
    </>
  )
}
