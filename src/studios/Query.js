import { useLocation, NavLink } from 'react-router-dom'

function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

export default function Query() {
  const x = QueryNavLink({
    pathname: '/invoices',
    search: '?filter=sa',
    hash: '',
    state: null,
    key: 'ae4cz2j',
  })
  return <>{JSON.stringify(x)}</>
}
