import React from "react"
import { Link, Outlet } from "react-router-dom"
import Invoices from "../ShoppingMall/invoices1"
import { getThemes } from "./data"

export default function Themes() {
  let themes = getThemes()
  // console.log(themes)
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {themes.map((theme) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/themes/${theme.number}`}
            key={theme.number}
          >
            {theme.name}
          </Link>
        ))}
      </nav>
      <Outlet />
      {/* {JSON.stringify(themes)} */}
    </div>
  )
}
