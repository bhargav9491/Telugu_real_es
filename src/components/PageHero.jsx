import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, accent, copy, heroImg }) {
  return (
    <section className={`page-hero${heroImg ? ' page-hero--photo' : ''}`}>
      {heroImg && (
        <div className="page-hero-photo">
          <img src={heroImg} alt={accent} />
          <div className="page-hero-photo-overlay" />
        </div>
      )}
      <div className="page-hero-grid" />
      <div className="container page-hero-inner">
        <motion.span
          className="kicker"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          {title}<br /><em>{accent}</em>
        </motion.h1>
        {copy && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            {copy}
          </motion.p>
        )}
      </div>
    </section>
  )
}
