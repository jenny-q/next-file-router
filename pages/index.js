import Link from 'next/link'

function Home() {
  return (
    <main>
    <h1>home</h1>
      <ul>
        {/* never use an anchor link, as it sends a brand new request */}
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
      </ul>
    </main>
  )
}

export default Home;