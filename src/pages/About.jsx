import { motion } from 'framer-motion'
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT THE BRAND"
        title="A more thoughtful way to"
        accent="discover property."
        copy="A premium digital home for a Vijayawada-based real estate brand focused on property discovery and enquiry support."
        heroImg="/images/hero_vijayawada.jpg"
      />

      {/* ── ABOUT GRID ─────────────────────────────────── */}
      <section className="section about-premium">
        <div className="container about-premium-grid">
          <motion.div
            className="about-photo-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-photo-main">
              <img src="/images/property_homes_vijayawada.jpg" alt="Premium Residential Home" />
              <div className="about-photo-main-overlay" />
            </div>
            <div className="about-photo-secondary">
              <img src="/images/property_villa_vijayawada.jpg" alt="Luxury Villa" />
              <div className="about-photo-secondary-overlay" />
              <div className="about-seal">
                <Sparkles size={20} />
                <strong>TSR</strong>
                <small>PROPERTY<br />FOCUS</small>
              </div>
            </div>
          </motion.div>

          <div className="about-story">
            <span className="kicker">01 / OUR APPROACH</span>
            <h2>Less noise.<br /><em>More clarity.</em></h2>
            <p>
              Telugu States Realestate is presented as a Vijayawada-based property brand helping customers explore
              residential plots, homes, villas and related opportunities across the region.
            </p>
            <p>
              The website experience is intentionally visual and enquiry-led: show the property, explain the location,
              make the next conversation easy.
            </p>
            <div className="about-checks">
              <div>
                <ShieldCheck />
                <span>
                  <b>Property-focused</b>
                  <small>A dedicated real estate discovery experience.</small>
                </span>
              </div>
              <div>
                <Check />
                <span>
                  <b>Direct enquiry</b>
                  <small>Clear routes to call, WhatsApp and request details.</small>
                </span>
              </div>
              <div>
                <Sparkles />
                <span>
                  <b>Premium presentation</b>
                  <small>Designed to make each opportunity easier to understand.</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROPERTY SHOWCASE STRIP ───────────────────── */}
      <section className="about-photo-strip">
        <motion.div
          className="about-strip-item"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
        >
          <img src="/images/property_plots_tadepalli.jpg" alt="Plots" />
          <div className="strip-label"><span>PLOTS</span><strong>Tadepalli</strong></div>
        </motion.div>
        <motion.div
          className="about-strip-item"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <img src="/images/property_villa_vijayawada.jpg" alt="Villas" />
          <div className="strip-label"><span>VILLAS</span><strong>Vijayawada</strong></div>
        </motion.div>
        <motion.div
          className="about-strip-item"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
        >
          <img src="/images/property_flats_vijayawada.jpg" alt="Flats" />
          <div className="strip-label"><span>FLATS</span><strong>Vijayawada</strong></div>
        </motion.div>
        <motion.div
          className="about-strip-item"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24 }}
        >
          <img src="/images/property_plots_gannavaram.jpg" alt="Gannavaram" />
          <div className="strip-label"><span>PLOTS</span><strong>Gannavaram</strong></div>
        </motion.div>
      </section>

      {/* ── VALUES ─────────────────────────────────────── */}
      <section className="section values">
        <div className="container">
          <div className="section-heading">
            <span className="kicker">02 / WHAT THE WEBSITE SHOULD DO</span>
            <h2>Turn attention into<br /><em>real conversations.</em></h2>
          </div>
          <div className="value-grid">
            {[
              ['01', 'Discover', 'Let customers quickly understand property types, locations and next steps.'],
              ['02', 'Trust', 'Present information cleanly and leave room for verified project documentation.'],
              ['03', 'Enquire', 'Make every important screen lead naturally to a call, WhatsApp or enquiry.'],
            ].map(([n, t, d]) => (
              <motion.div className="value-card" key={t} whileHover={{ y: -6 }}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="mini-cta">
        <div className="container mini-cta-inner">
          <div>
            <span className="kicker">READY TO EXPLORE?</span>
            <h2>Start with a<br /><em>conversation.</em></h2>
          </div>
          <Link className="btn primary" to="/contact">Contact Telugu States <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
