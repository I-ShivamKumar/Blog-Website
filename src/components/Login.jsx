import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import Loader from './Loader'

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)



    const login = async (data) => {
        setError('');
        setLoading(true)

        try {
            const session = await authService.login(data);

            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData));
                }
                navigate('/');
            }
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false)
        }

    }

    return (
        <div className='flex items-center justify-center w-11/12 mt-[5vw] mb-[5vw] mx-auto'>

            <div className={`mx-auto w-full max-w-lg glass rounded-xl p-10 border `}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" className='mx-auto' />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-3 text-center text-base text-white/80">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(login)} className='mt-8'>

                    <div className="space-y-9">

                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />

                        <Input
                            label="Password"
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

        </div >
    )
}

export default Login