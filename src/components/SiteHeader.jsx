import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'

const phone='918143452143'
const nav=[['/','Home'],['/properties','Properties'],['/locations','Locations'],['/about','About'],['/contact','Contact']]

export default function SiteHeader(){
 const [open,setOpen]=useState(false)
 return <>
  <div className="topbar"><div>Vijayawada • Andhra Pradesh</div><div>Property guidance across AP & Telangana</div><a href={`tel:+${phone}`}><Phone size={13}/> +91 81434 52143</a></div>
  <header className="header"><div className="container nav">
   <Link to="/" className="brand" onClick={()=>setOpen(false)}><img src={logo} alt="Telugu States Realestate"/></Link>
   <nav className={open?'nav-menu open':'nav-menu'}>{nav.map(([to,label])=><NavLink key={to} to={to} end={to==='/'} onClick={()=>setOpen(false)}>{label}</NavLink>)}<a className="nav-whatsapp" href={`https://wa.me/${phone}?text=Hi%20Telugu%20States%20Realestate%2C%20I%20am%20looking%20for%20a%20property.`} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)}>WhatsApp <ArrowUpRight size={16}/></a></nav>
   <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
  </div></header>
 </>
}
