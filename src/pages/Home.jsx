import { motion } from 'framer-motion'
import { ArrowRight, Check, MapPin, Play, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'

const featured=[
 {category:'Plots',location:'Tadepalli',title:'Residential Plot Opportunities',description:'Explore plot options in a fast-growing Vijayawada-region corridor.'},
 {category:'Villas',location:'Vijayawada Region',title:'Premium Villas & Duplexes',description:'Discover larger-format homes designed around contemporary family living.'},
 {category:'Homes',location:'Vijayawada',title:'Curated Residential Homes',description:'A starting point for buyers looking for ready or residential opportunities.'}
]
const locations=['Vijayawada','Amaravati','Tadepalli','Gannavaram','Guntur','Akunuru']
export default function Home(){return <>
 <section className="hero"><div className="hero-grid"/><div className="hero-orb orb-a"/><div className="hero-orb orb-b"/><div className="container hero-inner">
  <motion.div className="hero-copy" initial="hidden" animate="show" variants={{show:{transition:{staggerChildren:.1}}}}>
   <motion.span className="eyebrow" variants={{hidden:{opacity:0,y:15},show:{opacity:1,y:0}}}><Sparkles size={15}/> PROPERTY • GUIDANCE • INVESTMENT</motion.span>
   <motion.h1 variants={{hidden:{opacity:0,y:28},show:{opacity:1,y:0}}}>Find a place<br/><em>worth coming home to.</em></motion.h1>
   <motion.p variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}}>Explore residential plots, homes, villas and property opportunities across Vijayawada, Amaravati and surrounding growth corridors.</motion.p>
   <motion.div className="hero-actions" variants={{hidden:{opacity:0,y:15},show:{opacity:1,y:0}}}><Link className="btn primary" to="/properties">Explore Properties <ArrowRight size={18}/></Link><Link className="btn secondary" to="/contact">Talk to an Expert</Link></motion.div>
   <motion.div className="trust-row" variants={{hidden:{opacity:0,y:15},show:{opacity:1,y:0}}}><span><ShieldCheck size={16}/> Property-focused</span><span><MapPin size={16}/> Vijayawada based</span><span><Check size={16}/> Direct enquiries</span></motion.div>
  </motion.div>
  <motion.div className="hero-showcase" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.15}}>
   <div className="showcase-main"><div className="showcase-sky"><div className="tower a"/><div className="tower b"/><div className="tower c"/><div className="tower d"/><div className="tower e"/><div className="house-shape"><i/><i/><i/></div><div className="showcase-wave"/></div><div className="showcase-caption"><span>FEATURED REGION</span><strong>Vijayawada • Amaravati</strong><small>Residential & investment opportunities</small></div></div>
   <div className="float-chip chip-one"><MapPin size={16}/><span><b>Vijayawada</b><small>Andhra Pradesh</small></span></div><div className="float-chip chip-two"><span><b>Plots • Homes • Villas</b><small>Explore property categories</small></span></div>
  </motion.div>
 </div><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><i/></div></section>
 <div className="ticker"><div className="ticker-track">{['RESIDENTIAL PLOTS','PREMIUM HOMES','VILLAS & DUPLEXES','PROPERTY INVESTMENTS','ANDHRA PRADESH','TELANGANA'].map((x,i)=><span key={x}>{x}<b>✦</b></span>)}</div></div>
 <section className="section"><div className="container"><div className="section-heading split"><div><span className="kicker">01 / PROPERTY COLLECTION</span><h2>Find the right<br/><em>kind of place.</em></h2></div><p>A premium discovery layer for the brand’s live property inventory. Project-specific pricing, dimensions and approval details can be added from verified client documents.</p></div><div className="property-grid">{featured.map((x,i)=><PropertyCard item={x} index={i} key={x.title}/>)}</div><div className="center-cta"><Link className="text-link" to="/properties">View all property categories <ArrowRight size={17}/></Link></div></div></section>
 <section className="split-band"><div className="container split-band-inner"><div><span className="kicker light-kicker">02 / THE BRAND</span><h2>Property decisions<br/><em>start with clarity.</em></h2></div><div><p>Telugu States Realestate is positioned around property discovery, local guidance and direct enquiry support from Vijayawada.</p><Link className="btn light" to="/about">Discover the brand <ArrowRight size={17}/></Link></div></div></section>
 <section className="section locations-preview"><div className="container"><div className="section-heading split"><div><span className="kicker">03 / LOCATIONS</span><h2>Where the market<br/><em>is moving.</em></h2></div><p>Explore the locations currently associated with the brand’s property content.</p></div><div className="location-grid">{locations.map((x,i)=><Link to="/locations" key={x} className="location-tile"><span>0{i+1}</span><strong>{x}</strong><ArrowRight size={18}/></Link>)}</div></div></section>
 <section className="video-band"><div className="container video-band-inner"><div><span className="kicker light-kicker">PROPERTY STORIES</span><h2>See the property.<br/><em>Then see yourself there.</em></h2><p>Bring the brand’s existing property videos into the website and turn views into enquiries.</p><Link className="btn light" to="/contact">Request a property video <ArrowRight size={17}/></Link></div><div className="video-preview"><div className="play"><Play fill="currentColor" size={22}/></div><span>VIDEO SHOWCASE</span><strong>Property walkthroughs</strong></div></div></section>
 </>}
