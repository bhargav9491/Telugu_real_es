import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
const locations=[
 ['01','Vijayawada','The brand’s home market and a natural starting point for residential property discovery.'],
 ['02','Amaravati','Explore opportunities across the wider capital-region market.'],
 ['03','Tadepalli','A frequently featured corridor for residential plot and housing content.'],
 ['04','Gannavaram','A Vijayawada-side growth corridor with property activity.'],
 ['05','Guntur','A nearby market included in the wider regional property footprint.'],
 ['06','Akunuru','A location associated with property content around the Bandar Road side.']
]
export default function Locations(){return <><PageHero eyebrow="LOCATIONS" title="Closer to where" accent="life is moving." copy="Explore the markets currently associated with Telugu States Realestate. Live project availability can be layered in as the inventory is verified."/><section className="section"><div className="container location-list-large">{locations.map(([n,name,desc],i)=><motion.div className="location-row" key={name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.04}}><span className="loc-num">{n}</span><div className="loc-name"><MapPin size={16}/><h2>{name}</h2></div><p>{desc}</p><Link to={`/contact?location=${encodeURIComponent(name)}`} className="round-arrow"><ArrowUpRight size={18}/></Link></motion.div>)}</div></section><section className="map-band"><div className="container map-card"><div className="map-grid-lines"/><div className="map-pin pin-a"><MapPin/></div><div className="map-pin pin-b"><MapPin/></div><div className="map-pin pin-c"><MapPin/></div><div className="map-copy"><span className="kicker">REGIONAL FOOTPRINT</span><h2>Andhra Pradesh<br/><em>property focus.</em></h2><p>Project-level map pins, directions and brochures can be added once each listing is confirmed.</p><Link className="btn light" to="/contact">Ask about a location <ArrowUpRight size={17}/></Link></div></div></section></>}
