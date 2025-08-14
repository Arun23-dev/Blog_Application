import React from 'react'
import { Image } from '@imagekit/react'
import { Link } from 'react-router'

function FeaturedPost() {
  return (
    <div className="mt-4 flex flex-col lg:flex-row gap-8">

      {/* first post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">

        {/* image */}
        <Image
          src="/logo.png"
          height={200}
          width={300}
          alt="Picture of the author"
          loading="lazy"
          className="rounded-3xl object-cover"
        />

        {/* meta info */}
        <div className="flex gap-4 p-2 items-center text-xl font-semibold">
          <h1 className="text-2xl font-bold">01.</h1>
          <Link to="/web-design" className="hover:underline">
            Web Design
          </Link>
          <span className="text-lg text-gray-500">2 Days ago</span>
        </div>

        {/* title */}
        <h2 className="text-xl lg:text-3xl font-bold leading-snug">
          Hello buddy, I am doing something great in my life and most of the highly successful
          fdj rdjf djf ef dj ef ee fhe e
        </h2>

      </div>

      {/* remaining other posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">

        {/* second item */}
        <div className="lg:h-1/3">
          <Image
            src="/logo.png"
            width={400}
            height={500}
            alt="Picture of the author"
            loading="lazy"
            className="rounded-3xl object-cover"
          />
        </div>

        {/* third item */}
        <div className="lg:h-1/3 bg-gray-100 rounded-3xl flex items-center justify-center">
          <span className="text-gray-500">Placeholder for third post</span>
        </div>

        {/* fourth item */}
        <div className="lg:h-1/3 bg-gray-100 rounded-3xl flex items-center justify-center">
          <span className="text-gray-500">Placeholder for fourth post</span>
        </div>

      </div>
    </div>
  )
}

export default FeaturedPost
