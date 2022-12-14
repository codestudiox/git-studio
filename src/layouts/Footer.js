import React from "react"

export default function Footer() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      ></nav>
      <h2>Router manual</h2>
      <h2>References</h2>
      <ul>
        <li>
          ReactRouter:{' '}
          <a href="https://reactrouter.com/en/v6.3.0/getting-started/tutorial">
            https://reactrouter.com/en/v6.3.0/getting-started/tutorial{" "}
          </a>
        </li>
        <li>...</li>
      </ul>
    </div>
  )
}
