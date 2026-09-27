import { Outlet } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
export default function App(){return <div className="site"><SiteHeader/><main><Outlet/></main><SiteFooter/></div>}
