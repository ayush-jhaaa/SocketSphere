import {Outlet} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
function Layout() {
  return (
    <>
    <Header/>
    <div 
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://c1.wallpaperflare.com/preview/902/411/744/green-building-hostel-the-scenery.jpg')", opacity: 0.7 }}
      >
        <Outlet/>
      </div>
    <Footer/>
    </>
  )
}

export default Layout