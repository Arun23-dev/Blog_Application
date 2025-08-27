import React from 'react'
import { Link } from 'react-router'

function MainCategories() {
    return (
        <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full py-3 text-[20px] font-bold text-center items-center border-amber-300  shadow-lg  px-3 justify-between border-2'>
                <Link to="/post" className='bg-blue-600 rounded-2xl px-2 py-2 '>All post</Link>
                <Link to="/post?cat=web-design" className='hover:bg-blue-200 rounded-2xl px-2 py-2 '>Web Design</Link>
                <Link to="/post?cat=dev" className='hover:bg-blue-200 rounded-2xl px-2 py-2 '>Development</Link>
                <Link to="/post?cat=db" className='hover:bg-blue-200 rounded-2xl px-2 py-2 '>Databases</Link>
                <Link to="/post?cat=seo" className='hover:bg-blue-200 rounded-2xl px-2 py-2 '>SearchEngines</Link>
                <Link to="/post?cat=marketing" className='hover:bg-blue-200 rounded-2xl px-2 py-2 '>Marketing</Link>
            
        </div>
    )
}

export default MainCategories