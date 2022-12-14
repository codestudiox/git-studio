// import { Link, Outlet } from 'react-router-dom'
import { NavLink, Outlet } from "react-router-dom"
import { getInvoices } from "./data"

// import { useLocation, NavLink } from "react-router-dom";

// // function QueryNavLink({ to, ...props }) {
// //   let location = useLocation();
// //   return <NavLink to={to + location.search} {...props} />;
// // }

export default function Invoices() {
  let invoices = getInvoices()
  // let [searchParams, setSearchParams] = useSearchParams()
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {/* <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value
            if (filter) {
              setSearchParams({ filter })
              // console.log(filter)
            } else {
              setSearchParams({})
            }
          }}
        /> */}
        {invoices
          // .filter((invoice) => {
          //   let filter = searchParams.get("filter")
          //   if (!filter) return true
          //   let name = invoice.name.toLowerCase()
          //   return name.startsWith(filter.toLowerCase())
          // })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "blue",
                }
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}
