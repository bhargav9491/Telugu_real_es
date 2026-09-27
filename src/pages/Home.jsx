import { motion } from 'framer-motion'
import { ArrowRight, Check, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'

const featured = [
  { category: 'Plots',  location: 'Tadepalli',       title: 'Residential Plot Opportunities', description: 'Explore plot options in a fast-growing Vijayawada-region corridor.' },
  { category: 'Villas', location: 'Vijayawada Region', title: 'Premium Villas & Duplexes',      description: 'Discover larger-format homes designed around contemporary family living.' },
  { category: 'Homes',  location: 'Vijayawada',       title: 'Curated Residential Homes',      description: 'A starting point for buyers looking for ready or residential opportunities.' },
]

const locations = ['Vijayawada', 'Amaravati', 'Tadepalli', 'Gannavaram', 'Guntur', 'Akunuru']

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg-image">
          <img src="/images/hero_vijayawada.jpg" alt="Vijayawada luxury real estate" />
          <div className="hero-bg-overlay" />
        </div>
        <div className="hero-grid" />
        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span className="eyebrow" variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}>
              <Sparkles size={15} /> PROPERTY • GUIDANCE • INVESTMENT
            </motion.span>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}>
              Find a place<br /><em>worth coming home to.</em>
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
              Explore residential plots, homes, villas and property opportunities across Vijayawada, Amaravati and surrounding growth corridors.
            </motion.p>
            <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}>
              <Link className="btn primary" to="/properties">Explore Properties <ArrowRight size={18} /></Link>
              <Link className="btn secondary" to="/contact">Talk to an Expert</Link>
            </motion.div>
            <motion.div className="trust-row" variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}>
              <span><ShieldCheck size={16} /> Property-focused</span>
              <span><MapPin size={16} /> Vijayawada based</span>
              <span><Check size={16} /> Direct enquiries</span>
            </motion.div>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            className="hero-stats-panel"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <div className="stat-card">
              <strong>6+</strong>
              <span>Premium Locations</span>
            </div>
            <div className="stat-card featured-stat">
              <img src="/images/property_villa_vijayawada.jpg" alt="Premium Villa" className="stat-img" />
              <div className="stat-label-over">
                <strong>Vijayawada • Amaravati</strong>
                <span>Residential &amp; investment</span>
              </div>
            </div>
            <div className="stat-card">
              <strong>4</strong>
              <span>Property Types</span>
            </div>
          </motion.div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      {/* ── TICKER ─────────────────────────────────────── */}
      <div className="ticker">
        <div className="ticker-track">
          {['RESIDENTIAL PLOTS', 'PREMIUM HOMES', 'VILLAS & DUPLEXES', 'PROPERTY INVESTMENTS', 'ANDHRA PRADESH', 'TELANGANA'].map(x => (
            <span key={x}>{x}<b>✦</b></span>
          ))}
          {['RESIDENTIAL PLOTS', 'PREMIUM HOMES', 'VILLAS & DUPLEXES', 'PROPERTY INVESTMENTS', 'ANDHRA PRADESH', 'TELANGANA'].map(x => (
            <span key={x + '-2'}>{x}<b>✦</b></span>
          ))}
        </div>
      </div>

      {/* ── FEATURED PROPERTIES ────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-heading split">
            <div>
              <span className="kicker">01 / PROPERTY COLLECTION</span>
              <h2>Find the right<br /><em>kind of place.</em></h2>
            </div>
            <p>A premium discovery layer for the brand's live property inventory. Project-specific pricing, dimensions and approval details can be added from verified client documents.</p>
          </div>
          <div className="property-grid">
            {featured.map((x, i) => <PropertyCard item={x} index={i} key={x.title} />)}
          </div>
          <div className="center-cta">
            <Link className="text-link" to="/properties">View all property categories <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* ── BRAND BAND ─────────────────────────────────── */}
      <section className="split-band">
        <div className="container split-band-inner">
          <div>
            <span className="kicker light-kicker">02 / THE BRAND</span>
            <h2>Property decisions<br /><em>start with clarity.</em></h2>
          </div>
          <div>
            <p>Telugu States Realestate is positioned around property discovery, local guidance and direct enquiry support from Vijayawada.</p>
            <Link className="btn light" to="/about">Discover the brand <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ──────────────────────────────────── */}
      <section className="section locations-preview">
        <div className="container">
          <div className="section-heading split">
            <div>
              <span className="kicker">03 / LOCATIONS</span>
              <h2>Where the market<br /><em>is moving.</em></h2>
            </div>
            <p>Explore the locations currently associated with the brand's property content.</p>
          </div>
          <div className="location-grid">
            {locations.map((x, i) => (
              <Link to="/locations" key={x} className="location-tile">
                <span>0{i + 1}</span>
                <strong>{x}</strong>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO SHOWCASE BAND ────────────────────────── */}
      <section className="photo-band">
        <div className="photo-band-grid">
          <motion.div
            className="photo-band-item tall"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src="/images/property_homes_vijayawada.jpg" alt="Residential homes" />
            <div className="photo-band-caption"><span>HOMES</span><strong>Vijayawada</strong></div>
          </motion.div>
          <div className="photo-band-col">
            <motion.div
              className="photo-band-item"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <img src="/images/property_flats_vijayawada.jpg" alt="Luxury apartments" />
              <div className="photo-band-caption"><span>FLATS</span><strong>High-Rise Apartments</strong></div>
            </motion.div>
            <motion.div
              className="photo-band-item"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src="/images/property_plots_gannavaram.jpg" alt="Layout plots" />
              <div className="photo-band-caption"><span>PLOTS</span><strong>Gannavaram Corridor</strong></div>
            </motion.div>
          </div>
        </div>
        <div className="photo-band-copy">
          <span className="kicker light-kicker">04 / PROPERTY STORIES</span>
          <h2>See the property.<br /><em>Then see yourself there.</em></h2>
          <p>From open plots to premium villas — discover the full range of opportunities across Andhra Pradesh's fastest-growing corridors.</p>
          <Link className="btn light" to="/properties">Explore all properties <ArrowRight size={17} /></Link>
        </div>
      </section>
    </>
  )
}
