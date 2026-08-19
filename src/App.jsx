import { useState } from 'react'

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT ?? 'local'
const APP_VERSION = import.meta.env.VITE_APP_VERSION ?? 'dev'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <div className="card">
        <span className="badge">Deployed with OpenChoreo</span>

        <h1>Hello from the IDP demo app 👋</h1>
        <p className="subtitle">
          This app was pushed to GitHub, then built and deployed straight from
          the repo URL — no Dockerfile, no pipeline to write by hand.
        </p>

        <div className="counter">
          <button onClick={() => setCount((c) => c + 1)}>Clicked {count} times</button>
        </div>

        <dl className="meta">
          <div>
            <dt>Environment</dt>
            <dd>{ENVIRONMENT}</dd>
          </div>
          <div>
            <dt>Version</dt>
            <dd>{APP_VERSION}</dd>
          </div>
        </dl>

        <p className="footer">
          Built for{' '}
          <a
            href="https://platformengineering.org/events/what-it-really-takes-to-build-an-internal-developer-platform-with-backstage-2026-08-27"
            target="_blank"
            rel="noreferrer"
          >
            What It Really Takes to Build an Internal Developer Platform
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
