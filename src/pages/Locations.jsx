import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Home, Building2, Compass, Trees } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const locations = [
  {
    num: '01',
    name: 'Vijayawada',
    state: 'Andhra Pradesh',
    tagline: 'The Heart of the Market',
    desc: "Vijayawada is the brand's home market — a fast-growing city on the banks of the Krishna River. The city offers a mix of residential plots, premium apartments and independent homes across established and emerging micro-markets.",
    highlights: ['Benz Circle', 'Moghalrajpuram', 'Siddhartha Nagar', 'Tadepalli Road'],
    types: ['Plots', 'Villas', 'Homes', 'Flats'],
    img: '/images/hero_vijayawada.jpg',
    imgAlt: 'Vijayawada aerial view with Krishna river',
    accent: 'Established Market',
    featured: true,
  },
  {
    num: '02',
    name: 'Amaravati',
    state: 'Andhra Pradesh',
    tagline: 'Capital Region Opportunity',
    desc: "Amaravati, the planned capital city of Andhra Pradesh, represents one of the most significant real estate opportunities in the region. Wide boulevards, world-class infrastructure planning, and the Krishna River frontage make it a premium investment destination.",
    highlights: ['Amaravati Capital Area', 'Undavalli', 'Mangalagiri', 'Thullur'],
    types: ['Plots', 'Investments'],
    img: '/images/property_plots_gannavaram.jpg',
    imgAlt: 'Amaravati capital region layout',
    accent: 'Capital Growth Zone',
    featured: false,
  },
  {
    num: '03',
    name: 'Tadepalli',
    state: 'Andhra Pradesh',
    tagline: 'The Growth Corridor',
    desc: "Tadepalli sits on the Vijayawada–Amaravati corridor and has seen consistent demand for residential plots and independent homes. Well-connected via NH-16 and close to both city centres, it attracts both end-users and investors.",
    highlights: ['Tadepalli Layout', 'Krishnalanka', 'Kothagudem', 'Penumaka Road'],
    types: ['Plots', 'Homes'],
    img: '/images/property_plots_tadepalli.jpg',
    imgAlt: 'Tadepalli gated layout at sunset',
    accent: 'Residential Corridor',
    featured: false,
  },
  {
    num: '04',
    name: 'Gannavaram',
    state: 'Andhra Pradesh',
    tagline: 'Airport Side Growth',
    desc: "Gannavaram is a strategically positioned market next to Vijayawada International Airport. The area is witnessing rising plot and home demand driven by airport proximity, highway connectivity, and comparatively affordable entry points.",
    highlights: ['Gannavaram Town', 'Airport Road', 'Krishnavaram', 'Nidamanuru'],
    types: ['Plots', 'Homes'],
    img: '/images/property_plots_gannavaram.jpg',
    imgAlt: 'Gannavaram aerial residential layout',
    accent: 'Airport Proximity Zone',
    featured: false,
  },
  {
    num: '05',
    name: 'Guntur',
    state: 'Andhra Pradesh',
    tagline: 'A Strong Regional Market',
    desc: "Guntur is a major city in the region with its own strong residential property market. As part of the larger Amaravati–Vijayawada–Guntur (AVG) triangle, it features a wide range of property types from independent homes to gated apartment complexes.",
    highlights: ['Brodipet', 'Lakshmipuram', 'Naaz Centre', 'Amaravati Road'],
    types: ['Homes', 'Flats', 'Plots'],
    img: '/images/property_homes_vijayawada.jpg',
    imgAlt: 'Premium residential homes in Guntur region',
    accent: 'AVG Triangle Market',
    featured: false,
  },
  {
    num: '06',
    name: 'Akunuru',
    state: 'Andhra Pradesh',
    tagline: 'Emerging Bandar Road Corridor',
    desc: "Akunuru is an emerging location on the Bandar Road side of Vijayawada, offering plot opportunities in a quieter setting with good connectivity to the main city. It represents an entry-level investment point in the broader Vijayawada market.",
    highlights: ['Bandar Road Stretch', 'Akunuru Village', 'NH-65 Access', 'Riverside Plots'],
    types: ['Plots'],
    img: '/images/property_plots_tadepalli.jpg',
    imgAlt: 'Layout plots near Akunuru Andhra Pradesh',
    accent: 'Entry-Level Investment',
    featured: false,
  },
]

const typeIcons = { Plots: Compass, Villas: Building2, Homes: Home, Flats: Building2, Investments: Trees }

export default function Locations() {
  return (
    <>
      <PageHero
        eyebrow="LOCATIONS"
        title="Closer to where"
        accent="life is moving."
        copy="Six key markets across Andhra Pradesh. Explore each location — its character, opportunity and property types."
        heroImg="/images/property_plots_gannavaram.jpg"
      />

      {/* ── LOCATION SECTIONS ──────────────────────────── */}
      {locations.map((loc, i) => {
        const isEven = i % 2 === 0
        return (
          <section
            key={loc.name}
            className={`loc-section${loc.featured ? ' loc-section--featured' : ''}${isEven ? '' : ' loc-section--flip'}`}
          >
            <div className="container loc-section-inner">
              {/* IMAGE SIDE */}
              <motion.div
                className="loc-img-wrap"
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="loc-img-frame">
                  <img src={loc.img} alt={loc.imgAlt} loading="lazy" />
                  <div className="loc-img-overlay" />
                  <div className="loc-img-badge">
                    <MapPin size={13} />
                    <span>{loc.name}, {loc.state}</span>
                  </div>
                  <div className="loc-img-num">{loc.num}</div>
                </div>
                <div className="loc-accent-pill">{loc.accent}</div>
              </motion.div>

              {/* COPY SIDE */}
              <motion.div
                className="loc-copy"
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="loc-copy-top">
                  <span className="kicker">{loc.num} / {loc.name.toUpperCase()}</span>
                  <h2>{loc.name}<br /><em>{loc.tagline}</em></h2>
                </div>
                <p className="loc-desc">{loc.desc}</p>

                {/* Micro-locations */}
                <div className="loc-highlights">
                  <span className="loc-highlights-label">Key Areas</span>
                  <ul>
                    {loc.highlights.map(h => (
                      <li key={h}><MapPin size={11} /> {h}</li>
                    ))}
                  </ul>
                </div>

                {/* Property types */}
                <div className="loc-types">
                  <span className="loc-highlights-label">Property Types</span>
                  <div className="loc-type-chips">
                    {loc.types.map(t => {
                      const Icon = typeIcons[t] || Home
                      return (
                        <div className="loc-type-chip" key={t}>
                          <Icon size={13} /> {t}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <Link
                  to={`/contact?location=${encodeURIComponent(loc.name)}`}
                  className="loc-enquire-btn"
                >
                  Enquire about {loc.name} <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          </section>
        )
      })}

      {/* ── MAP CTA BAND ───────────────────────────────── */}
      <section className="map-band">
        <div className="container map-card">
          <div className="map-grid-lines" />
          <div className="map-pin pin-a"><MapPin /></div>
          <div className="map-pin pin-b"><MapPin /></div>
          <div className="map-pin pin-c"><MapPin /></div>
          <div className="map-copy">
            <span className="kicker">REGIONAL FOOTPRINT</span>
            <h2>Andhra Pradesh<br /><em>property focus.</em></h2>
            <p>Project-level map pins, directions and brochures can be added once each listing is confirmed.</p>
            <Link className="btn light" to="/contact">Ask about a location <ArrowUpRight size={17} /></Link>
          </div>
          <motion.div
            className="map-photo-inset"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src="/images/hero_vijayawada.jpg" alt="Vijayawada aerial view" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
