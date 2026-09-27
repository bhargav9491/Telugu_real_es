import { useMemo,useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PropertyCard from '../components/PropertyCard'
const data=[
 {category:'Plots',location:'Tadepalli',title:'Residential Plot Opportunities',description:'Residential plot options around the Vijayawada–Tadepalli growth corridor.'},
 {category:'Villas',location:'Vijayawada Region',title:'Premium Villas & Duplexes',description:'Contemporary villa and duplex opportunities for family-focused living.'},
 {category:'Homes',location:'Vijayawada',title:'Curated Residential Homes',description:'A starting point for customers exploring residential homes.'},
 {category:'Flats',location:'Vijayawada',title:'Apartment Opportunities',description:'Explore apartment options based on current client inventory.'},
 {category:'Plots',location:'Gannavaram',title:'Growth-Corridor Plots',description:'Plot opportunities around a prominent Vijayawada-side growth corridor.'},
 {category:'Plots',location:'Amaravati Region',title:'Amaravati Property Options',description:'Explore property opportunities around the wider Amaravati region.'}
]
export default function Properties(){const [filter,setFilter]=useState('All');const [q,setQ]=useState('');const filtered=useMemo(()=>data.filter(x=>(filter==='All'||x.category===filter)&&(`${x.title} ${x.location}`.toLowerCase().includes(q.toLowerCase()))),[filter,q]);return <><PageHero eyebrow="PROPERTY COLLECTION" title="A considered way to" accent="explore property." copy="Browse property categories and locations. Replace these presentation cards with verified live inventory as projects are onboarded."/><section className="section"><div className="container"><div className="property-toolbar"><div className="filter-tabs">{['All','Plots','Villas','Homes','Flats'].map(x=><button className={filter===x?'active':''} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div><label className="searchbox"><Search size={16}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search location or property"/></label></div><div className="property-grid">{filtered.map((x,i)=><PropertyCard key={x.title} item={x} index={i}/>)}</div>{!filtered.length&&<div className="empty-state">No matching property cards yet. Try another location or category.</div>}</div></section><section className="mini-cta"><div className="container mini-cta-inner"><div><span className="kicker">CAN’T FIND WHAT YOU NEED?</span><h2>Tell us what you’re<br/><em>looking for.</em></h2></div><Link className="btn primary" to="/contact">Send an enquiry <ArrowRight size={18}/></Link></div></section></>}
