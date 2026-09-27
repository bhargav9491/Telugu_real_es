import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo.png'
const phone='918143452143'
export default function SiteFooter(){return <footer className="footer">
 <div className="container footer-grid">
  <div><img src={logo} className="footer-logo" alt="Telugu States Realestate"/><p className="footer-copy">A Vijayawada-based real estate brand helping buyers explore plots, homes, villas and property opportunities across Andhra Pradesh and Telangana.</p></div>
  <div><span className="footer-label">Explore</span><div className="footer-links"><Link to="/properties">Properties</Link><Link to="/locations">Locations</Link><Link to="/about">About Us</Link><Link to="/contact">Contact</Link></div></div>
  <div><span className="footer-label">Connect</span><a className="footer-contact" href={`tel:+${phone}`}><Phone size={16}/> +91 81434 52143</a><p className="footer-address"><MapPin size={16}/> Benz Circle, Vijayawada, Andhra Pradesh</p></div>
 </div>
 <div className="container footer-bottom"><span>© {new Date().getFullYear()} Telugu States Realestate. All rights reserved.</span><span>Built for better property discovery.</span></div>
 </footer>}
