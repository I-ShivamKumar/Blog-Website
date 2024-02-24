import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function PostCard({ $id, title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full border border-gray-500 hover:bg-[#4b4957] duration-200 rounded-xl p-2'>

                <div className='w-full justify-center mb-4'>
                    <img className='rounded-xl' src={appwriteService.getFilepreview(featuredImage)} alt={title} />
                </div>
                <h2 className='text-xl p-2 font-bold text-white'>{title}</h2>


            </div>
        </Link>
    )
}

export default PostCard

