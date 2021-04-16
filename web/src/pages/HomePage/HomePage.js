import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <header>
        <h1>Maklad's Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>Home</main>
    </>
  )
}

export default HomePage
