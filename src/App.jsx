import { useState } from 'react'
import { ArrowUpRight, Copy, Shield, Swords, Users, Heart, Menu, X, Gamepad2, ChevronDown } from 'lucide-react'

const SERVER_IP = 'play.nexorasmp.2bd.net'
const DISCORD_URL = 'https://discord.gg/vSGXupYJG'

function App() {
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  async function copyIp() {
    try {
      await navigator.clipboard.writeText(SERVER_IP)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const nav = [
    ['Home', '#home'],
    ['Ranks', '#ranks'],
    ['Leaderboard', '#leaderboard'],
    ['Store', '#store'],
    ['Links', '#links'],
  ]

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="NEXORA home">
          <span className="brand-mark">N</span>
          <span>NEXORA<span className="brand-muted"> SMP</span></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="login-link" href="#login">PLAYER LOGIN <ArrowUpRight size={14} /></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow"><span className="pulse-dot" /> JAVA + BEDROCK LIFESTEAL NETWORK</div>
          <h1>YOUR SURVIVAL.<br /><span>YOUR LEGACY.</span></h1>
          <p className="hero-copy">Enter a world where every heart matters, every battle has consequences, and only the strongest create their legacy.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={copyIp}><Gamepad2 size={17} /> {copied ? 'IP COPIED' : 'PLAY NOW'} <ArrowUpRight size={16} /></button>
            <a className="button button-secondary" href={DISCORD_URL} target="_blank" rel="noreferrer">JOIN DISCORD <ArrowUpRight size={16} /></a>
          </div>
          <div className="server-address"><span>SERVER ADDRESS</span><code>{SERVER_IP}</code><button onClick={copyIp} aria-label="Copy server IP"><Copy size={15} /></button></div>
        </div>
        <div className="hero-side">
          <div className="orb orb-large" />
          <div className="hero-emblem"><span>N</span><small>EST. NEXORA</small></div>
          <div className="vertical-label">SURVIVE · FIGHT · CONQUER</div>
        </div>
        <div className="hero-bottom"><span>01 / ENTER THE VOID</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="status-strip">
        <div><span className="status-indicator" /> <b>SERVER STATUS</b><small>UNKNOWN · LIVE STATUS NOT CONNECTED</small></div>
        <div><b>JAVA + BEDROCK</b><small>CROSS-PLATFORM ACCESS</small></div>
        <div><b>PLAY YOUR WAY</b><small>BUILD YOUR LEGACY</small></div>
      </section>

      <section className="section intro-section">
        <div className="section-kicker">THE NEXORA EXPERIENCE <span>— 01</span></div>
        <div className="intro-layout">
          <h2>MORE THAN<br />A <span>SERVER.</span></h2>
          <p>NEXORA is a Lifesteal world built around competition, community, and the moments that make every fight matter. Your next chapter starts here.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card"><Heart /><span className="card-index">01 / LIFESTEAL</span><h3>EVERY HEART<br />HAS A STORY.</h3><p>Every elimination changes the balance of power. Protect what you have earned.</p></article>
          <article className="feature-card"><Swords /><span className="card-index">02 / COMPETITION</span><h3>PROVE YOUR<br />STRENGTH.</h3><p>Sharpen your skills, take on rivals, and build a reputation that lasts.</p></article>
          <article className="feature-card"><Users /><span className="card-index">03 / COMMUNITY</span><h3>FIND YOUR<br />PEOPLE.</h3><p>Form alliances, create rivalries, and make your mark together.</p></article>
        </div>
      </section>

      <section className="join-section" id="links">
        <div className="join-glow" />
        <div className="section-kicker">YOUR NEXT CHAPTER <span>— 02</span></div>
        <h2>READY TO CLAIM<br /><span>YOUR LEGACY?</span></h2>
        <p>Choose your edition. Join the world. Make it yours.</p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={copyIp}><Copy size={16} /> {copied ? 'IP COPIED' : 'COPY SERVER IP'}</button>
          <a className="button button-secondary" href={DISCORD_URL} target="_blank" rel="noreferrer">JOIN DISCORD <ArrowUpRight size={16} /></a>
        </div>
        <div className="join-ip">{SERVER_IP}</div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">N</span><span>NEXORA<span className="brand-muted"> SMP</span></span></a>
        <span>© {new Date().getFullYear()} NEXORA SMP. ALL RIGHTS RESERVED.</span>
        <a href={DISCORD_URL} target="_blank" rel="noreferrer">DISCORD <ArrowUpRight size={13} /></a>
      </footer>
    </main>
  )
}

export default App