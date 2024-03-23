import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import hamburgerIcon from "/icon-hamburger.svg"
import closeIcon from "/icon-close.svg"


function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const [navOpen, setNavOpen] = useState(false)

    const closeNavbar = () => {
        setNavOpen(false)
    }

    const toggleNavbar = () => {
        setNavOpen(!navOpen)
    }

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
        {
            name: "Profile",
            slug: "/profile",
            active: authStatus,
        },
    ]


    return (
        <header className='py-2 sticky shadow top-0 z-50 px-0 glass'>
            <Container>
                <nav className='flex justify-between flex-wrap items-center'>

                    <div className="">
                        <Link to="/" onClick={closeNavbar}> <Logo width='100px' /> </Link>
                    </div>

                    <div className='md:hidden mr-4'>
                        <button onClick={toggleNavbar}><img src={navOpen ? closeIcon : hamburgerIcon} alt="" /></button>
                    </div>
                    <ul className={` ml-auto md:w-auto md:items-center md:flex-row  md:flex     border-red-600 ${navOpen ? "w-full flex flex-col items-center" : "hidden"}`}>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className='pt-2'>
                                    <NavLink onClick={closeNavbar} to={item.slug} className={({ isActive }) => `inline-bock px-6 py-2 mx-3 duration-200  hover:bg-blue-300 hover:text-black rounded-full ${isActive ? 'bg-blue-300 text-black rounded-full' : 'text-white'} `}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header