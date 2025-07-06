import React from 'react'
import Link from 'next/link'

const ForgotPassword = () => {
    return (
        <div className='flex justify-center py-28 min-h-screen'>
            <div className='h-45 w-80 bg-cyan-200 flex justify-top flex-col items-center rounded-xl'>

                <div className='flex flex-wrap gap-5 my-6'>
                    <input type="text" placeholder='Username' className='mx-auto bg-amber-50 w-54 text-center rounded-sm' />
                    <input type="email" placeholder='Registered email' className='mx-auto bg-amber-50 w-54 text-center rounded-sm' />
                </div>

                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 cursor-pointer">Submit</button>

            </div>
        </div>
    )
}

export default ForgotPassword
