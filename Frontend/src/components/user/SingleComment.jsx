import React from 'react'
import { Image } from '@imagekit/react'

function SingleComment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className='flex flex-row gap-3 items-center'>
        <Image
          src="./logo.png"
          className=" object-cover rounded-2xl h-[50px] w-[50px]"
          alt="Post Image"
        />
        <span className='font-medium'>John Doe</span>
        {/* data of post */}
        <span className='text-sm text-gray-500'>2 Days ago</span>
      </div>
      <div className='mt-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias saepe adipisci error dolore fugiat quasi, sapiente eaque excepturi dicta sequi perferendis atque assumenda, dignissimos consequuntur repellat. Optio blanditiis cum ullam!lorem10
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati rerum alias quis possimus officia unde libero explicabo vel adipisci vero suscipit consectetur molestiae, iure sunt repudiandae repellat debitis omnis.
        </p>
      </div>
    </div>
  )
}

export default SingleComment