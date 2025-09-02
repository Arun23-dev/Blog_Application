
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import AIChatbot from '../components/AIChatbot'

function PublicLayout() {
  return (
    <div className='sm:px-2 md:px-8 lg:px-16 xl:px-32 '>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <AIChatbot />
    </div>
  )
}

export default PublicLayout;

