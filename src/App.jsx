import { useState } from 'react'
import {
  ArrowUpRight, Copy, Shield, Swords, Users, Heart, Menu, X,
  Gamepad2, Crown, Trophy, ShoppingBag, ExternalLink, ChevronRight,
  Zap, Globe2, CircleHelp
} from 'lucide-react'

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
      <div className="background-grid" aria-hidden="true" />
      <div className="ambient ambient-blue" aria-hidden="true" />
      <div className="ambient ambient-cyan" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="NEXORA home">
          <span className="brand-mark">N</span>
          <span className="brand-name">NEXORA<span> NETWORK</span></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="header-login" href="#player">
          PLAYER PORTAL <ArrowUpRight size={14} />
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy-block">
          <div className="eyebrow"><span className="live-dot" /> THE NEXT GENERATION LIFESTEAL NETWORK</div>
          <h1>ENTER THE<br /><span>NEXT ERA.</span></h1>
          <p className="hero-description">Your world. Your rivals. Your legacy. Step into NEXORA — a cross-platform Lifesteal experience built for players who make every moment count.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={copyIp}>
              <Gamepad2 size={17} /> {copied ? 'IP COPIED' : 'PLAY NOW'} <ArrowUpRight size={16} />
            </button>
            <a className="button button-outline" href={DISCORD_URL} target="_blank" rel="noreferrer">
              JOIN DISCORD <ExternalLink size={15} />
            </a>
          </div>
          <div className="connect-bar">
            <div><span className="connect-label">JAVA + BEDROCK SERVER</span><code>{SERVER_IP}</code></div>
            <button onClick={copyIp} aria-label="Copy server address"><Copy size={16} /></button>
          </div>
        </div>

        <div className="hero-art" aria-label="NEXORA emblem">
          <div className="art-ring ring-one" />
          <div className="art-ring ring-two" />
          <div className="art-crosshair crosshair-one" />
          <div className="art-crosshair crosshair-two" />
          <div className="nexora-emblem"><span>N</span></div>
          <div className="art-caption"><span>NX / 001</span><span>BUILT FOR THE BOLD</span></div>
          <div className="art-side-label">SURVIVE · ADAPT · CONQUER</div>
        </div>
        <div className="hero-meta"><span>01 — THE NEXORA EXPERIENCE</span><span>SCROLL TO EXPLORE <ChevronRight size={13} /></span></div>
      </section>

      <section className="network-bar">
        <div className="network-item"><Globe2 /><div><b>CROSS-PLATFORM</b><span>JAVA + BEDROCK</span></div></div>
        <div className="network-item"><Heart /><div><b>LIFESTEAL</b><span>EVERY HEART MATTERS</span></div></div>
        <div className="network-item"><Swords /><div><b>COMPETITIVE</b><span>MAKE YOUR LEGACY</span></div></div>
        <div className="network-item"><Users /><div><b>COMMUNITY</b><span>FIGHT AS ONE</span></div></div>
      </section>

      <section className="section experience-section">
        <div className="section-heading">
          <div className="eyebrow">BUILT FOR YOUR NEXT CHAPTER <span>— 01</span></div>
          <h2>MORE THAN A<br /><span>MINECRAFT SERVER.</span></h2>
          <p>NEXORA brings together survival, competition and community. Join the world, find your allies, and write your own story.</p>
        </div>
        <div className="experience-grid">
          <article className="experience-card"><div className="card-top"><Heart /><span>01 / LIFESTEAL</span></div><h3>EVERY HEART<br />HAS VALUE.</h3><p>Survive, compete and protect what you earn in a world where every encounter matters.</p><div className="card-line" /></article>
          <article className="experience-card"><div className="card-top"><Swords /><span>02 / COMPETITION</span></div><h3>OWN THE<br />BATTLEFIELD.</h3><p>Challenge rivals, sharpen your skills and make your name known across the network.</p><div className="card-line" /></article>
          <article className="experience-card"><div className="card-top"><Users /><span>03 / COMMUNITY</span></div><h3>BUILD YOUR<br />ALLIANCE.</h3><p>Meet players, form teams and create the stories that make a server unforgettable.</p><div className="card-line" /></article>
        </div>
      </section>

      <section className="data-section" id="ranks">
        <div className="section-inner">
          <div className="section-heading compact">
            <div className="eyebrow">YOUR STATUS. YOUR JOURNEY <span>— 02</span></div>
            <h2>THE <span>RANKS.</span></h2>
            <p>Discover the official NEXORA rank ladder and in-game benefits.</p>
          </div>
          <div className="feature-placeholder"><div className="placeholder-icon"><Crown /></div><div><b>OFFICIAL RANKS ARE BEING PREPARED</b><span>We’ll publish the confirmed NEXORA ranks and their exact benefits here. No invented tiers.</span></div><span className="coming-label">COMING SOON</span></div>
        </div>
      </section>

      <section className="section leaderboard-section" id="leaderboard">
        <div className="section-heading compact">
          <div className="eyebrow">THE PLAYERS TO WATCH <span>— 03</span></div>
          <h2>THE <span>LEADERBOARD.</span></h2>
          <p>Player rankings will appear here when live game statistics are connected.</p>
        </div>
        <div className="feature-placeholder"><div className="placeholder-icon"><Trophy /></div><div><b>THE RACE HASN’T STARTED</b><span>Top kills, hearts and player stats will be displayed after the server data connection is ready.</span></div><span className="coming-label">COMING SOON</span></div>
      </section>

      <section className="store-section" id="store">
        <div className="store-content">
          <div className="eyebrow">THE NEXORA EXCHANGE <span>— 04</span></div>
          <h2>GEAR UP FOR<br /><span>WHAT’S NEXT.</span></h2>
          <p>The official store is being prepared. Product listings and purchases will appear only after the store is configured.</p>
          <span className="store-status"><ShoppingBag size={15} /> STORE IN DEVELOPMENT</span>
        </div>
        <div className="store-art"><div className="store-orbit" /><div className="store-symbol"><Shield size={76} strokeWidth={1} /><Zap size={28} /></div><span>NX / MARKETPLACE</span></div>
      </section>

      <section className="section player-section" id="player">
        <div className="player-panel">
          <div className="player-icon"><Gamepad2 /></div>
          <div className="eyebrow">YOUR PERSONAL SPACE <span>— 05</span></div>
          <h2>PLAYER <span>PORTAL.</span></h2>
          <p>Link your Minecraft account to access your NEXORA profile, rank and player information.</p>
          <div className="portal-note"><CircleHelp size={17} /><span>Secure WebLink verification is not connected yet. Player login will activate after its backend is configured.</span></div>
          <button className="button button-disabled" disabled>PLAYER LOGIN — COMING SOON</button>
        </div>
      </section>

      <section className="join-section" id="links">
        <div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE <span>— 06</span></div>
        <h2>READY TO ENTER<br /><span>THE NEXT ERA?</span></h2>
        <p>Connect with the community and get ready to join the world.</p>
        <div className="hero-actions centered">
          <button className="button button-primary" onClick={copyIp}><Copy size={16} /> {copied ? 'IP COPIED' : 'COPY SERVER IP'}</button>
          <a className="button button-outline" href={DISCORD_URL} target="_blank" rel="noreferrer">JOIN DISCORD <ArrowUpRight size={16} /></a>
        </div>
        <div className="edition-row"><span>JAVA EDITION</span><i /> <span>BEDROCK EDITION</span><i /> <span>LIFESTEAL NETWORK</span></div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">N</span><span className="brand-name">NEXORA<span> NETWORK</span></span></a>
        <span>© {new Date().getFullYear()} NEXORA SMP. ALL RIGHTS RESERVED.</span>
        <a href={DISCORD_URL} target="_blank" rel="noreferrer">DISCORD <ArrowUpRight size={13} /></a>
      </footer>
    </main>
  )
}

export default App
