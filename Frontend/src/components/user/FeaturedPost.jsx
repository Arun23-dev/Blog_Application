import React from 'react'
import { Image } from '@imagekit/react'
import { Link } from 'react-router'

function FeaturedPost() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">

      {/* first post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">

        {/* image */}
        <Image
          src="/logo.png"
          alt="Picture of the author"
          loading="lazy"
          className="rounded-3xl object-cover
          sm: w-full sm:h-[100px] 
          md:w-[340px] md:h-[300px] 
          lg:w-8/10 lg:h-[300px] "

        />

        {/* meta info */}
        <div className="flex px-2 items-center text-xl gap-4">
          <h1 className=" lg:text-2xl font-semibold">01.</h1>
          <Link to="/web-design" className="hover:underline text-blue-700">
            Web Design
          </Link>
          <span className="text-lg text-gray-500">2 Days ago</span>
        </div>

        {/* title */}
        <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold leading-snug pr-3 ">
          The morning light spilled gently through the window, carrying with it the p
        </Link>

      </div>

      {/* remaining other posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">

        {/* second item */}
        <div className="lg:h-1/3 flex flex-row justify-between gap-4 pt-2 ">

          {/* image part */}
          <Image
            src="/logo.png"
            alt="Picture of the author"
            loading="lazy"
            className="rounded-3xl object-cover w-1/3 h-[150px]"
          />
          {/* meta info */}
          <div className='flex flex-col pt-2 '>
          <div className="flex  flex-row bg-amber-600  gap-2 items-center w-2/3">
              <h1 className="  font-semibold">02.</h1>
              <Link to="/web-design" className="hover:underline text-blue-700">Web Design</Link>
              <span className="text-lg text-gray-500">2 Days ago</span></div>
        
          <div className='bg-red-500 pt-2'>
            <Link to="/test" className="text-xl  font-semibold " >
              The morning light spilled gently may not be perfect, but within....Showmore
            </Link>

          </div>
          </div>



        </div>

        {/* third item */}
      <div className="lg:h-1/3 flex flex-row justify-between gap-4 pt-2 ">

          {/* image part */}
          <Image
            src="/logo.png"
            alt="Picture of the author"
            loading="lazy"
            className="rounded-3xl object-cover w-1/3 h-[150px]"
          />
          {/* meta info */}
          <div className='flex flex-col pt-2 '>
          <div className="flex  flex-row bg-amber-600  gap-2 items-center w-2/3">
              <h1 className="  font-semibold">02.</h1>
              <Link to="/web-design" className="hover:underline text-blue-700">Web Design</Link>
              <span className="text-lg text-gray-500">2 Days ago</span></div>
        
          <div className='bg-red-500 pt-2'>
            <Link to="/test" className="text-xl  font-semibold " >
              The morning light spilled gently may not be perfect, but within....Showmore
            </Link>

          </div>
          </div>



        </div>



        {/* fourth item */}
      <div className="lg:h-1/3 flex flex-row justify-between gap-4 pt-2 ">

          {/* image part */}
          <Image
            src="/logo.png"
            alt="Picture of the author"
            loading="lazy"
            className="rounded-3xl object-cover w-1/3 h-[150px]"
          />
          {/* meta info */}
          <div className='flex flex-col pt-2 '>
          <div className="flex  flex-row bg-amber-600  gap-2 items-center w-2/3">
              <h1 className="  font-semibold">02.</h1>
              <Link to="/web-design" className="hover:underline text-blue-700">Web Design</Link>
              <span className="text-lg text-gray-500">2 Days ago</span></div>
        
          <div className='bg-red-500 pt-2'>
            <Link to="/test" className="text-xl  font-semibold " >
              The morning light spilled gently may not be perfect, but within....Showmore
            </Link>

          </div>
          </div>



        </div>



      </div>
    </div>
  )
}

export default FeaturedPost
