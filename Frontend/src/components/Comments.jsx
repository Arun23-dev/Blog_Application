import React from 'react'
import SingleComment from './SingleComment'

function Comments() {
    return (
        <div className=' flex flex-col  gap-8  lg:h-3/5'>
            <h1 className='text-xl text-gray-50 underline'>Comments</h1>
            <div className='flex items-center justify-between gap-8 w-full '>
                <textarea name="" id="" placeholder='write a comments here' className='bg-amber-50 w-full rounded-2xl pl-3 pt-3' />
                <button className='bg-blue-800 border-1 px-3  py-1 rounded-2xl'>Send</button>
            </div>
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />
            <SingleComment />

        </div>
    )
}

export default Comments