import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Compass, Home, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
const icons={Plots:Compass,Villas:Building2,Homes:Home,Flats:Building2}
export default function PropertyCard({item,index=0}){const Icon=icons[item.category]||Home;return <motion.article className="property-card premium-card" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{delay:index*.06}} whileHover={{y:-8}}>
 <div className="property-media"><div className="media-architecture"><span/><span/><span/><span/><span/></div><div className="property-icon"><Icon size={22}/></div><span className="property-tag">{item.category}</span><span className="property-index">0{index+1}</span></div>
 <div className="property-body"><div><span className="location-line"><MapPin size={13}/>{item.location}</span><h3>{item.title}</h3><p>{item.description}</p></div><Link to={`/contact?property=${encodeURIComponent(item.title)}`} className="round-arrow" aria-label={`Enquire about ${item.title}`}><ArrowUpRight size={18}/></Link></div>
 </motion.article>}
