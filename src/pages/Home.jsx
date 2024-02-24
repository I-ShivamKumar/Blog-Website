import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import notebook from "../assets/notebook.webp"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)


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
                            <Link to={authStatus ? "/all-posts" : "/login"}>
                                <button
                                    className="relative my-[5vw] py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                                >
                                    {authStatus ? "See All Posts!" : "Get Started!"}

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