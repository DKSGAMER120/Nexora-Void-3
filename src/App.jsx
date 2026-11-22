import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Copy, Menu, X, Search, ChevronRight, Gamepad2, Shield, Swords, Users, Heart, Crown, Trophy, ShoppingBag, Server, Activity, Zap, Globe2, CircleHelp, ExternalLink, LockKeyhole, BookOpen, CalendarDays, Coins, UserRound, Settings, Layers, Radio, Terminal, Package, ChartNoAxesCombined } from 'lucide-react'

const SERVER_IP='play.nexorasmp.2bd.net'
const DISCORD_URL='https://discord.gg/vSGXupYJG'

const pages = [
['/','Home','Network','The NEXORA network homepage, server connection and latest announcements.'],
['/about','About NEXORA','Network','Our network, philosophy, community and what makes the NEXORA experience.'],
['/features','Features','Network','Explore Lifesteal, competitive gameplay, crossplay and community systems.'],
['/status','Network Status','Network','Verified Java and Bedrock availability when a status provider is connected.'],
['/announcements','Announcements','Community','Official network announcements and maintenance notices.'],
['/rules','Network Rules','Community','Community standards, gameplay rules and appeal guidance.'],
['/staff','Staff Team','Community','Official staff directory and responsibilities.'],
['/support','Support Centre','Community','Get help with account, gameplay, purchases and technical issues.'],
['/faq','FAQ','Community','Answers to common NEXORA questions.'],
['/apply','Staff Applications','Community','Staff application information and application status.'],
['/ranks','Ranks','Progression','Official in-game ranks and confirmed benefits.'],
['/rank-benefits','Rank Benefits','Progression','Compare perks and permissions for confirmed ranks.'],
['/leaderboard','Global Leaderboard','Competition','Live player rankings after game statistics are connected.'],
['/leaderboard/kills','Top Kills','Competition','Players ranked by verified kills.'],
['/leaderboard/hearts','Top Hearts','Competition','Players ranked by verified heart count.'],
['/leaderboard/balances','Top Balances','Competition','Players ranked by verified economy balance.'],
['/leaderboard/playtime','Top Playtime','Competition','Players ranked by verified playtime.'],
['/tierlist','PvP Tier List','Competition','Official competitive tier list with evidence and review rules.'],
['/tierlist/players','Player Tiers','Competition','Player placements and tier history.'],
['/tierlist/submit','Tier Test Applications','Competition','How to request a fair competitive tier assessment.'],
['/seasons','Seasons','Competition','Season schedule, standings and archived champions.'],
['/tournaments','Tournaments','Competition','Tournament formats, brackets, results and registrations.'],
['/events','Events','Competition','Upcoming network events and community activities.'],
['/clans','Clans & Teams','Social','Discover teams, clan profiles and recruitment.'],
['/clans/create','Create a Clan','Social','Clan creation requirements and registration.'],
['/bounties','Bounties','Gameplay','Active player bounties when the game data feed is connected.'],
['/duels','Duels','Gameplay','Duel formats, rules and challenge information.'],
['/koth','King of the Hill','Gameplay','KOTH schedule, arena information and winners.'],
['/guides','Guides','Resources','Getting started, gameplay systems and server tutorials.'],
['/guides/getting-started','Getting Started','Resources','Join NEXORA on Java or Bedrock and start playing.'],
['/maps','World & Maps','Resources','World information, map releases and reset notices.'],
['/store','NEXORA Store','Commerce','Official products and services; checkout activates after payment setup.'],
['/store/ranks','Rank Store','Commerce','Purchaseable rank packages after products and checkout are configured.'],
['/store/cosmetics','Cosmetics','Commerce','Cosmetic catalogue and availability.'],
['/store/coins','Coin Shop','Commerce','Coin packages and balance top-ups after payment integration.'],
['/cart','Shopping Cart','Commerce','Review selected products before secure checkout is enabled.'],
['/player','Player Portal','Player','Your linked Minecraft identity, rank, stats and account settings.'],
['/player/link','Link Minecraft Account','Player','Secure one-time WebLink verification for your Minecraft UUID.'],
['/player/profile','My Profile','Player','Your public profile, identity and progression.'],
['/player/stats','My Statistics','Player','Your verified kills, deaths, hearts and playtime.'],
['/player/history','Account History','Player','Recent account activity and linked identity changes.'],
['/hosting','NEXORA Hosting','Hosting','NEXORA game-server hosting service and infrastructure overview.'],
['/hosting/plans','Hosting Plans','Hosting','Hosting plans and resource allocations when pricing is finalized.'],
['/hosting/order','Order Hosting','Hosting','Hosting order flow; provisioning requires an operational hosting backend.'],
['/hosting/panel','Hosting Panel','Hosting','Secure customer server control panel powered by Pterodactyl when configured.'],
['/hosting/status','Hosting Status','Hosting','Hosting node and service health from verified monitoring.'],
['/dashboard','Control Centre','Control','Role-gated overview for authorized NEXORA operators.'],
['/dashboard/players','Player Management','Control','Search and manage linked player records with audit logging.'],
['/dashboard/staff','Staff Management','Control','Staff roles, permissions and access reviews.'],
['/dashboard/moderation','Moderation','Control','Cases, mutes, bans and appeals through connected moderation services.'],
['/dashboard/integrations','Integrations','Control','Connection health for Minecraft, Discord, Pterodactyl and data services.'],
['/dashboard/settings','Network Settings','Control','Protected network configuration and administrative preferences.']
].map(([path,title,group,description])=>({path,title,group,description}))

const details = {
'/ranks':{eyebrow:'PROGRESSION SYSTEM',heading:'OFFICIAL RANKS',body:'Only confirmed NEXORA ranks and their actual in-game permissions will be published here. Rank names, prices and benefits must match the live server configuration.',items:['Confirmed rank ladder','Exact permissions and perks','In-game and web rank sync']},
'/leaderboard':{eyebrow:'COMPETITIVE DATA',heading:'THE GLOBAL LEADERBOARD',body:'A fair leaderboard needs a trusted Minecraft data source. These rankings will populate from verified UUID-based player statistics.',items:['Kills and deaths','Hearts and balance','Playtime and seasonal rankings']},
'/tierlist':{eyebrow:'PVP COMPETITION',heading:'THE NEXORA TIER LIST',body:'Competitive placements should be based on a published test format, reviewer rules and transparent appeals—not invented scores.',items:['Defined test modes','Reviewer and evidence history','Placement changes and appeals']},
'/hosting':{eyebrow:'NEXORA INFRASTRUCTURE',heading:'YOUR SERVER. YOUR CONTROL.',body:'NEXORA Hosting is planned as a separate game-server service. The customer panel will use Pterodactyl Panel and Wings on an authorized Linux host, connected through a protected backend.',items:['Minecraft Java and Bedrock support','Server console, files and backups','Resource usage and service status']},
'/dashboard':{eyebrow:'RESTRICTED OPERATIONS',heading:'NETWORK CONTROL CENTRE',body:'Administrative tools will be available only after secure authentication and server-side role checks. This preview does not grant administrative access.',items:['Role-based access control','Audit trail for sensitive actions','Integration health and monitoring']},
'/player/link':{eyebrow:'ACCOUNT SECURITY',heading:'LINK YOUR MINECRAFT ACCOUNT',body:'The intended flow uses a short-lived one-time code generated in-game and verified against the player UUID. The backend is not connected yet.',items:['One-time expiring code','UUID-based account linking','Rate limits and audit logging']}
}

function App(){
 const [path,setPath]=useState(window.location.pathname.replace(/\/$/,'')||'/')
 const [menuOpen,setMenuOpen]=useState(false)
 const [query,setQuery]=useState('')
 const [copied,setCopied]=useState(false)
 useEffect(()=>{const pop=()=>{setPath(window.location.pathname.replace(/\/$/,'')||'/');window.scrollTo(0,0)};window.addEventListener('popstate',pop);return()=>window.removeEventListener('popstate',pop)},[])
 function go(to){if(to!==window.location.pathname){window.history.pushState({},'',to);setPath(to);window.scrollTo(0,0);setMenuOpen(false)}}
 function copyIp(){navigator.clipboard?.writeText(SERVER_IP).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),1600)}).catch(()=>{})}
 const current=pages.find(p=>p.path===path)||{path,title:'Page not found',group:'NEXORA',description:'This route is not part of the current NEXORA site map.'}
 const detail=details[path]
 const filtered=useMemo(()=>pages.filter(p=>(p.title+' '+p.group+' '+p.description).toLowerCase().includes(query.toLowerCase())),[query])
 const groups=[...new Set(pages.filter(p=>p.path!=='/').map(p=>p.group))]
 const isHome=path==='/'
 return <main>
  <div className="background-grid"/><div className="ambient ambient-blue"/><div className="ambient ambient-cyan"/>
  <header className="site-header">
   <a className="brand" href="/" onClick={e=>{e.preventDefault();go('/')}}><span className="brand-mark">N</span><span className="brand-name">NEXORA<span> VOID NETWORK</span></span></a>
   <nav className={menuOpen?'nav nav-open':'nav'}><a href="/" onClick={e=>{e.preventDefault();go('/')}}>HOME</a><a href="/ranks" onClick={e=>{e.preventDefault();go('/ranks')}}>RANKS</a><a href="/leaderboard" onClick={e=>{e.preventDefault();go('/leaderboard')}}>LEADERBOARD</a><a href="/tierlist" onClick={e=>{e.preventDefault();go('/tierlist')}}>TIER LIST</a><a href="/hosting" onClick={e=>{e.preventDefault();go('/hosting')}}>HOSTING</a></nav>
   <a className="header-login" href="/player" onClick={e=>{e.preventDefault();go('/player')}}>PLAYER PORTAL <ArrowUpRight size={14}/></a>
   <button className="mobile-menu" onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X/>:<Menu/>}</button>
  </header>
  {isHome?<>
   <section className="hero" id="home"><div className="hero-copy-block"><div className="eyebrow"><span className="live-dot"/> JAVA + BEDROCK LIFESTEAL NETWORK</div><h1>YOUR WORLD.<br/><span>YOUR LEGACY.</span></h1><p className="hero-description">A connected gaming network for survival, competition and community. Explore the NEXORA universe, track your progress and build your legacy.</p><div className="hero-actions"><button className="button button-primary" onClick={copyIp}><Gamepad2 size={17}/>{copied?'IP COPIED':'COPY SERVER IP'} <ArrowUpRight size={16}/></button><a className="button button-outline" href={DISCORD_URL} target="_blank" rel="noreferrer">JOIN DISCORD <ExternalLink size={15}/></a></div><div className="connect-bar"><div><span className="connect-label">JAVA + BEDROCK SERVER ADDRESS</span><code>{SERVER_IP}</code></div><button onClick={copyIp}><Copy size={16}/></button></div></div><div className="hero-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="nexora-emblem"><span>N</span></div><div className="art-caption"><span>NX / VOID 003</span><span>BUILT FOR THE BOLD</span></div><div className="art-side-label">SURVIVE · COMPETE · CONQUER</div></div><div className="hero-meta"><span>NEXORA VOID 3.0 / NETWORK PORTAL</span><span>{pages.length} ROUTES · ONE NETWORK <ChevronRight size={13}/></span></div></section>
   <section className="network-bar"><div className="network-item"><Globe2/><div><b>CROSS-PLATFORM</b><span>JAVA + BEDROCK</span></div></div><div className="network-item"><Heart/><div><b>LIFESTEAL</b><span>EVERY HEART MATTERS</span></div></div><div className="network-item"><Trophy/><div><b>COMPETITIVE</b><span>RANKED PLAY</span></div></div><div className="network-item"><Server/><div><b>NEXORA HOSTING</b><span>GAME SERVER CONTROL</span></div></div></section>
   <section className="section"><div className="section-heading"><div className="eyebrow">THE NETWORK ECOSYSTEM — 01</div><h2>ONE NETWORK.<br/><span>EVERYTHING CONNECTED.</span></h2><p>Explore public community pages, player services, competition systems and the planned NEXORA Hosting platform.</p></div><div className="experience-grid"><article className="experience-card"><div className="card-top"><Trophy/><span>01 / COMPETITION</span></div><h3>RANKS &<br/>LEADERBOARDS.</h3><p>Official rank information, player statistics, seasonal rankings and PvP tier placements.</p><a className="card-link" href="/leaderboard" onClick={e=>{e.preventDefault();go('/leaderboard')}}>EXPLORE COMPETITION <ArrowUpRight size={14}/></a></article><article className="experience-card"><div className="card-top"><UserRound/><span>02 / PLAYER SERVICES</span></div><h3>YOUR PLAYER<br/>IDENTITY.</h3><p>Link your Minecraft identity and access your profile, stats and account history.</p><a className="card-link" href="/player" onClick={e=>{e.preventDefault();go('/player')}}>OPEN PLAYER PORTAL <ArrowUpRight size={14}/></a></article><article className="experience-card"><div className="card-top"><Server/><span>03 / INFRASTRUCTURE</span></div><h3>NEXORA<br/>HOSTING.</h3><p>A planned hosting service with customer control panel and server management.</p><a className="card-link" href="/hosting" onClick={e=>{e.preventDefault();go('/hosting')}}>EXPLORE HOSTING <ArrowUpRight size={14}/></a></article></div></section>
   <section className="data-section"><div className="section-inner"><div className="section-heading compact"><div className="eyebrow">EXPLORE THE PLATFORM — 02</div><h2>THE NEXORA <span>DIRECTORY.</span></h2><p>{pages.length} dedicated routes across the network. Search for any page below.</p></div><div className="directory-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search pages, services, rankings..."/></div><div className="directory-groups">{groups.map(group=><div className="directory-group" key={group}><div className="directory-label">{group.toUpperCase()}</div><div className="directory-links">{filtered.filter(p=>p.group===group).map(p=><button key={p.path} onClick={()=>go(p.path)}>{p.title}<ArrowUpRight size={13}/></button>)}</div></div>)}</div></div></section>
   <section className="join-section"><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>ENTER THE<br/><span>NEXORA NETWORK.</span></h2><p>Join the community and get ready to play.</p><div className="hero-actions centered"><button className="button button-primary" onClick={copyIp}><Copy size={16}/>{copied?'COPIED':'COPY SERVER IP'}</button><a className="button button-outline" href={DISCORD_URL} target="_blank" rel="noreferrer">JOIN DISCORD <ArrowUpRight size={16}/></a></div></section>
  </>:<section className="route-page"><div className="route-breadcrumb"><button onClick={()=>go('/')}><ArrowLeft size={14}/> HOME</button><span>/</span><span>{current.group.toUpperCase()}</span><span>/</span><b>{current.title.toUpperCase()}</b></div><div className="route-hero"><div className="eyebrow">{detail?.eyebrow||current.group.toUpperCase()+' / NEXORA VOID 3.0'}</div><h1>{detail?.heading||current.title.toUpperCase()}</h1><p>{detail?.body||current.description}</p><div className="route-state"><span className="state-dot"/> {current.group==='Control'?'RESTRICTED — AUTHENTICATION REQUIRED':current.group==='Hosting'?'SETUP REQUIRED — HOST INFRASTRUCTURE NOT CONNECTED':current.group==='Player'?'BACKEND REQUIRED — WEBLINK NOT CONNECTED':'INFORMATION / INTEGRATION SETUP REQUIRED'}</div></div><div className="route-content"><div className="route-main"><div className="route-section-title"><span>01</span><h2>{detail?'SYSTEM OVERVIEW':'PAGE OVERVIEW'}</h2></div><p className="route-copy">{current.description} This section is part of the NEXORA master portal. Its live data and actions will be enabled only after the relevant backend, permissions and service connection are configured.</p><div className="route-feature-grid">{(detail?.items||['Dedicated '+current.title+' experience','Responsive player and staff interface','Secure backend connection and verified data']).map((item,i)=><div className="route-feature" key={item}><span>0{i+1}</span><b>{item}</b><small>PLANNED MODULE</small></div>)}</div><div className="integration-notice"><LockKeyhole/><div><b>LIVE INTEGRATION NOT ENABLED</b><span>No fake player records, server metrics, purchases or control actions are shown. Connect the required service to activate this module.</span></div></div></div><aside className="route-aside"><div className="aside-heading">RELATED MODULES</div>{pages.filter(p=>p.group===current.group&&p.path!==path).slice(0,7).map(p=><button key={p.path} onClick={()=>go(p.path)}>{p.title}<ChevronRight size={14}/></button>)}<div className="aside-heading">NETWORK CONNECTION</div><code>{SERVER_IP}</code><button className="aside-discord" onClick={()=>window.open(DISCORD_URL,'_blank','noopener,noreferrer')}>COMMUNITY DISCORD <ArrowUpRight size={14}/></button></aside></div></section>}
  <footer className="footer"><a className="brand" href="/" onClick={e=>{e.preventDefault();go('/')}}><span className="brand-mark">N</span><span className="brand-name">NEXORA<span> VOID NETWORK</span></span></a><span>© {new Date().getFullYear()} NEXORA SMP. ALL RIGHTS RESERVED.</span><a href={DISCORD_URL} target="_blank" rel="noreferrer">DISCORD <ArrowUpRight size={13}/></a></footer>
 </main>
}
export default App
