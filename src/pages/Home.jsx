import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import notebook from "../assets/notebook.webp"
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])


    // useEffect(() => {
    //     appwriteService.getPosts().then((posts) => {
    //         if (posts) {
    //             setPosts(posts.documents)
    //         }
    //     })
    // }, [])

    return (
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="min-h-[55vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <div className='flex flex-col sm:flex-col md:flex-row'>
                        <div className='sm:w-full md:w-full lg:w-1/2 px-8 justify-center items-center'>
                            <h2 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 ">
                                Welcome to the BlogApp!
                            </h2>
                            <p className=' text-md lg:text-[.9vw]'>
                                Your hub for interesting reads, insights, and more. Start your journey into the world of our blog app. Happy reading!
                            </p>
                            <Link to="/">
                                <button
                                    className="overflow-hidden relative w-32 p-2 h-12 bg-purple-700 text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group mt-[3vw]"
                                >
                                    {`Hover me!`}
                                    <span
                                        className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
                                    ></span>
                                    <span
                                        className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
                                    ></span>
                                    <span
                                        className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
                                    ></span>
                                    <span
                                        className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                    >{`Hover me!`}</span>
                                </button>
                            </Link>
                        </div>
                        <div className='flex justify-center items-center sm:w-full md:w-full lg:w-1/2 lg:px-4 sm:px-[3vh]'>
                            <img className='w-[30vh] mt-10 lg:w-[25vw] lg:mt-0 rounded-lg' src={notebook} alt="" />
                        </div>



                    </div>
                </div>
            </Container>
        </div>
    )

}

export default Home