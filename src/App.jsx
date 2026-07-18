import turnaImg from './assets/turna.jpg'
import './App.css'

const highlights = [
  'Elegant layouts',
  'Immersive visuals',
  'Fast, modern experience',
]

const stats = [
  { value: '24/7', label: 'support' },
  { value: '12k+', label: 'active users' },
  { value: '98%', label: 'satisfaction' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">Turna</div>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Book a call
        </a>
      </header>

      <main className="hero-section">
        <section className="hero-copy" id="about">
          <p className="eyebrow">Premium digital experience</p>
          <h1>Design that feels as refined as it looks.</h1>
          <p className="description">
            Turna brings together storytelling, layout, and modern visuals to create a
            polished experience with personality.
          </p>

          <div className="button-row">
            <a className="btn btn-primary" href="#work">
              Explore projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Get started
            </a>
          </div>

          <ul className="highlight-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="hero-card" id="work" aria-label="Featured visual">
          <img src={turnaImg} alt="Featured design preview" />
          <div className="overlay-card">
            <p>Featured concept</p>
            <h2>Minimal, bold, memorable</h2>
          </div>
        </section>
      </main>

      <section className="stats-grid" aria-label="Highlights">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="feature-grid" id="contact">
        <article className="feature-card">
          <h3>Thoughtful structure</h3>
          <p>Balanced composition and clear hierarchy guide every interaction.</p>
        </article>
        <article className="feature-card">
          <h3>Visual storytelling</h3>
          <p>High-quality imagery and calm colors keep the experience immersive.</p>
        </article>
        <article className="feature-card">
          <h3>Ready to launch</h3>
          <p>Built with React and Vite so it is easy to extend and ship.</p>
        </article>
      </section>
    </div>
  )
}

export default App
