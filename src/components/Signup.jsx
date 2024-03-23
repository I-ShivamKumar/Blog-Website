import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useForm } from 'react-hook-form'
import Loader from './Loader'

function Signup() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, seterror] = useState('')
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)

    const create = async (data) => {
        setLoading(true)
        seterror('')
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                dispatch(login(userData))
                navigate('/')
            }
        } catch (error) {
            seterror(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center w-11/12 mx-auto mt-[2vw] mb-[2vw]">
            <div className={`mx-auto w-full max-w-lg glass rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" className='mx-auto' />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-white/80">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        {loading ?
                            <div className='w-full grid place-items-center'> <Loader></Loader></div>
                            :
                            <Button
                                type="submit"
                                className=" my-4 py-2 px-5 w-full text-black font-semibold button-custom rounded-xl shadow-lg   hover:cursor-pointer"
                            >Sign in</Button>}
                    </div>
                </form>
            </div>

        </div>
    )
}


export default Signup