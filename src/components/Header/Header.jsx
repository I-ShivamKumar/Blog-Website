import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

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
        <header className='py-4 sticky shadow top-0 z-50 px-0 bg-gray-900'>
            <Container>
                <nav className='flex'>
                    <div className='mr-8'>
                        <Link to='/'>
                            <Logo width='500px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto '>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className='pt-2'>
                                    <NavLink to={item.slug} className={({ isActive }) => `inline-bock px-6 py-2 mx-3 duration-200  hover:bg-blue-300 hover:text-black rounded-full ${isActive ? 'bg-blue-300 text-black rounded-full' : 'text-white'} `}>
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