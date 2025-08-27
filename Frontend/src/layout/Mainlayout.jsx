
import Navbar from '../components/user/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/user/Footer'
function Mainlayout() {
  return (
    <div className='sm:px-4 md:px-8 lg:px-16 xl:px-32 '>
      <Navbar></Navbar>
      <Outlet></Outlet>
     
    </div>
  )
}

export default Mainlayout