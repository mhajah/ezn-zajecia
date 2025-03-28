import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Link to="/users/$userId" params={{ userId: 'michal' }}>
        WEJDŹ DO MICHAŁ
      </Link>
      {/* <br />
      <a href="/users/michal">
      WEJDZ DO MICHAL AHREF
      </a> */}
    </>
  )
}
