import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const categoryImages = {
  'Plots-Tadepalli':    '/images/property_plots_tadepalli.jpg',
  'Villas-Vijayawada Region': '/images/property_villa_vijayawada.jpg',
  'Homes-Vijayawada':  '/images/property_homes_vijayawada.jpg',
  'Flats-Vijayawada':  '/images/property_flats_vijayawada.jpg',
  'Plots-Gannavaram':  '/images/property_plots_gannavaram.jpg',
  'Plots-Amaravati Region': '/images/property_plots_tadepalli.jpg',
}

const fallbackImages = {
  Plots:  '/images/property_plots_gannavaram.jpg',
  Villas: '/images/property_villa_vijayawada.jpg',
  Homes:  '/images/property_homes_vijayawada.jpg',
  Flats:  '/images/property_flats_vijayawada.jpg',
}

export default function PropertyCard({ item, index = 0 }) {
  const imgKey = `${item.category}-${item.location}`
  const img = categoryImages[imgKey] || fallbackImages[item.category] || '/images/hero_vijayawada.jpg'

  return (
    <motion.article
      className="property-card premium-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
    >
      <div className="property-media">
        <img
          src={img}
          alt={item.title}
          className="property-photo"
          loading="lazy"
        />
        <div className="property-media-overlay" />
        <span className="property-tag">{item.category}</span>
        <span className="property-index">0{index + 1}</span>
      </div>
      <div className="property-body">
        <div>
          <span className="location-line">
            <MapPin size={13} />
            {item.location}
          </span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <Link
          to={`/contact?property=${encodeURIComponent(item.title)}`}
          className="round-arrow"
          aria-label={`Enquire about ${item.title}`}
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </motion.article>
  )
}
