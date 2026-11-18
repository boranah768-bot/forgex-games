
const games = [
  {
    title: "Sky Hop 3D",
    category: "Arcade",
    description:
      "Jump into the challenge, test your reflexes, and see how far you can go.",
    status: "AVAILABLE NOW",
    href: "/download/game.apk",
    banner: "/games/game-1.jpg",
    logo: "/games/sky-hop-logo.png",
  },
];

export default function Home() {
  return (
    <main id="top">
      <nav className="navbar">
        <a href="#top" className="brand">
          <img src="/logo.jpeg" alt="FORGEX Games logo" />
          <span>
            FORGEX<span className="brand-accent"> GAMES</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#games">Games</a>
          <a href="#about">About</a>
          <a href="#download">Download</a>
        </div>

        <a href="#games" className="nav-button">
          Explore Games <span>↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="live-dot" />
            INDEPENDENT GAME STUDIO
          </div>

          <h1>
            PLAY BEYOND
            <br />
            <span>LIMITS.</span>
          </h1>

          <p className="hero-description">
            Welcome to FORGEX Games. Discover exciting gaming
            experiences, challenge yourself, and play your way.
          </p>

          <div className="hero-actions">
            <a href="#games" className="primary-button">
              Explore Games <span>↗</span>
            </a>
            <a href="#about" className="secondary-button">
              Discover FORGEX
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>01+</strong>
              <span>GAMES TO EXPLORE</span>
            </div>
            <div className="stat-divider" />
            <div>
              <strong>100%</strong>
              <span>GAMING PASSION</span>
            </div>
          </div>
        </div>

        <div className="hero-logo-wrap">
          <div className="logo-orbit orbit-one" />
          <div className="logo-orbit orbit-two" />

          <div className="hero-logo-card">
            <img src="/logo.jpeg" alt="FORGEX Games" />
          </div>

          <div className="floating-label">
            <span className="live-dot" /> LET'S PLAY
          </div>

          <div className="floating-number">FG / 001</div>
        </div>

        <div className="hero-bottom">
          <span>BUILT FOR PLAYERS</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="games-section section" id="games">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE COLLECTION</div>
            <h2>
              OUR <span>GAMES.</span>
            </h2>
            <p className="section-description">
              Discover our latest game and get ready to play.
            </p>
          </div>

          <div className="collection-count">
            <span>01</span> GAME
          </div>
        </div>

        {games.map((game) => (
          <article className="game-showcase" key={game.title}>
            <img
              className="game-showcase-banner"
              src={game.banner}
              alt={`${game.title} full game banner`}
            />

            <div className="game-showcase-overlay" />

            <div className="game-showcase-content">
              <span className="showcase-status">
                <span className="live-dot" />
                {game.status}
              </span>

              <img
                className="showcase-game-logo"
                src={game.logo}
                alt={`${game.title} logo`}
              />

              <span className="showcase-category">
                FORGEX ORIGINAL · {game.category.toUpperCase()}
              </span>

              <h3>{game.title}</h3>

              <p>{game.description}</p>

              <a
                href={game.href}
                className="showcase-download-button"
                download="FORGEX-Sky-Hop-3D.apk"
              >
                <span className="download-icon">↓</span>
                DOWNLOAD NOW
                <span className="download-arrow">↗</span>
              </a>

              <span className="showcase-note">
                ANDROID APK · FREE DOWNLOAD
              </span>
            </div>

            <span className="showcase-index">FG / 001</span>
          </article>
        ))}
      </section>

      <section className="download-section" id="download">
        <div className="download-inner">
          <div className="download-copy">
            <div className="eyebrow">YOUR NEXT GAME STARTS HERE</div>

            <h2>
              READY TO
              <br />
              <span>PLAY?</span>
            </h2>

            <p>
              Get the game, take on the challenge, and experience
              FORGEX Games for yourself.
            </p>

            <a
              href="/download/game.apk"
              className="primary-button"
              download="FORGEX-Sky-Hop-3D.apk"
            >
              Download APK <span>↓</span>
            </a>

            <span className="download-small">
              Android APK download. Only install apps you trust.
            </span>
          </div>

          <div className="download-brand">
            <img src="/logo.jpeg" alt="FORGEX Games company logo" />
            <span>FORGEX GAMES</span>
            <small>MADE FOR THE GAME.</small>
          </div>
        </div>
      </section>

      <section className="about-section section" id="about">
        <div className="about-logo">
          <img src="/logo.jpeg" alt="FORGEX Games logo" />
        </div>

        <div className="about-copy">
          <div className="eyebrow">WHO WE ARE</div>

          <h2>
            SMALL STUDIO.
            <br />
            <span>BIG AMBITION.</span>
          </h2>

          <p>
            FORGEX Games is built around one idea: create fun gaming
            experiences and bring players together through play.
            This is just the beginning of our journey.
          </p>

          <a href="#games" className="text-link">
            EXPLORE OUR GAMES <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <a href="#top" className="brand footer-brand">
          <img src="/logo.jpeg" alt="FORGEX Games logo" />
          <span>
            FORGEX<span className="brand-accent"> GAMES</span>
          </span>
        </a>

        <p>
          © {new Date().getFullYear()} FORGEX Games. All rights reserved.
        </p>

        <a href="#top" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}
