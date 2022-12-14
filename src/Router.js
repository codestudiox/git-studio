import React from "react"
import { Routes, Route } from "react-router-dom"

import App from "./App"
import Home from "./studios/Home"
import Invoices1 from "./studios/ShoppingMall/invoices1"
import Invoices from "./studios/ShoppingMall/invoices"
import Invoice1 from "./studios/ShoppingMall/invoice1"
import Invoice from "./studios/ShoppingMall/invoice"
import Themes from "./studios/theme/themes"
import Theme from "./studios/theme/theme"
import ThemeNavigate from "./studios/theme/themeNavigate"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="invoices1" element={<Invoices1 />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice1 />} />
        </Route>
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="themes" element={<Themes />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a Theme</p>
              </main>
            }
          />
          <Route path=":themeId" element={<ThemeNavigate />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  )
}

export default Router
