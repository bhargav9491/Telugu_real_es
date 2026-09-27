import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PropertyCard from '../components/PropertyCard'

const data = [
  { category: 'Plots',  location: 'Tadepalli',        title: 'Residential Plot Opportunities', description: 'Residential plot options around the Vijayawada–Tadepalli growth corridor.' },
  { category: 'Villas', location: 'Vijayawada Region', title: 'Premium Villas & Duplexes',      description: 'Contemporary villa and duplex opportunities for family-focused living.' },
  { category: 'Homes',  location: 'Vijayawada',        title: 'Curated Residential Homes',      description: 'A starting point for customers exploring residential homes.' },
  { category: 'Flats',  location: 'Vijayawada',        title: 'Apartment Opportunities',        description: 'Explore apartment options based on current client inventory.' },
  { category: 'Plots',  location: 'Gannavaram',        title: 'Growth-Corridor Plots',          description: 'Plot opportunities around a prominent Vijayawada-side growth corridor.' },
  { category: 'Plots',  location: 'Amaravati Region',  title: 'Amaravati Property Options',     description: 'Explore property opportunities around the wider Amaravati region.' },
]

export default function Properties() {
  const [filter, setFilter] = useState('All')
  const [q, setQ] = useState('')
  const filtered = useMemo(
    () => data.filter(x =>
      (filter === 'All' || x.category === filter) &&
      `${x.title} ${x.location}`.toLowerCase().includes(q.toLowerCase())
    ),
    [filter, q]
  )

  return (
    <>
      <PageHero
        eyebrow="PROPERTY COLLECTION"
        title="A considered way to"
        accent="explore property."
        copy="Browse property categories and locations. Replace these presentation cards with verified live inventory as projects are onboarded."
        heroImg="/images/property_plots_gannavaram.jpg"
      />

      {/* ── PROPERTY GRID ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="property-toolbar">
            <div className="filter-tabs">
              {['All', 'Plots', 'Villas', 'Homes', 'Flats'].map(x => (
                <button
                  className={filter === x ? 'active' : ''}
                  onClick={() => setFilter(x)}
                  key={x}
                >
                  {x}
                </button>
              ))}
            </div>
            <label className="searchbox">
              <Search size={16} />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search location or property" />
            </label>
          </div>

          <div className="property-grid">
            {filtered.map((x, i) => <PropertyCard key={x.title} item={x} index={i} />)}
          </div>
          {!filtered.length && (
            <div className="empty-state">No matching property cards yet. Try another location or category.</div>
          )}
        </div>
      </section>

      {/* ── IMAGE HIGHLIGHT BAND ───────────────────────── */}
      <section className="prop-highlight-band">
        <div className="container prop-highlight-inner">
          <motion.div
            className="prop-highlight-images"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="phi-main">
              <img src="/images/property_villa_vijayawada.jpg" alt="Premium Villa" />
              <div className="phi-tag">VILLAS</div>
            </div>
            <div className="phi-side">
              <div className="phi-side-item">
                <img src="/images/property_plots_tadepalli.jpg" alt="Plots" />
                <div className="phi-tag">PLOTS</div>
              </div>
              <div className="phi-side-item">
                <img src="/images/property_flats_vijayawada.jpg" alt="Flats" />
                <div className="phi-tag">FLATS</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="prop-highlight-copy"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="kicker">PREMIUM INVENTORY</span>
            <h2>Every property,<br /><em>carefully presented.</em></h2>
            <p>From open plots in Tadepalli to luxury villas in Vijayawada — our curated collection covers the full spectrum of residential opportunity in Andhra Pradesh.</p>
            <ul className="phi-list">
              <li>✦ DTCP & RERA approved projects</li>
              <li>✦ Verified location details</li>
              <li>✦ Direct developer connections</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── MINI CTA ──────────────────────────────────── */}
      <section className="mini-cta">
        <div className="container mini-cta-inner">
          <div>
            <span className="kicker">CAN'T FIND WHAT YOU NEED?</span>
            <h2>Tell us what you're<br /><em>looking for.</em></h2>
          </div>
          <Link className="btn primary" to="/contact">Send an enquiry <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
