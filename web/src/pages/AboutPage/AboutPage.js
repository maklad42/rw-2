import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
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
      <main>
        <p>
          This site was created to demonstrate my mastery of redwoodJS: Look
          upon my works and despait!
        </p>
        <Link to={routes.home()}>Go Home</Link>
      </main>
    </>
  )
}

export default AboutPage
