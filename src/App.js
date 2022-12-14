import { Outlet, Link } from "react-router-dom";
import Footer
 from "./layouts/Footer";
export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices1">Invoices1</Link> |{" "}
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/themes">Themes</Link> |{" "}
        <Link to="/theme">Themes</Link> 
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}
