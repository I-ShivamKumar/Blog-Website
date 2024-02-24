import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


function ProfileComponent() {
    const userData = useSelector((state) => state.auth.userData);

    console.log(userData);
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center my-10'>Profile</h1>
            <div>
                <div className='flex items-center justify-center'>
                    <div className='w-1/3'>
                        <h2 className="text-xl font-bold mt-4">User Name :</h2>
                        <p className="text-xl font-bold  mt-2">E Mail :</p>
                    </div>
                    <div className=''>
                        <h2 className="text-xl font-bold mt-4 ">{userData?.name}</h2>
                        <p className="text-xl font-bold  mt-2">{userData?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent