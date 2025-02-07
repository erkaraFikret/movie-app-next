import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between max-w-6xl mx-auto p-3'>
            <ul className='flex gap-4'>
                <li>
                    <Link href="/sign-in">Sign in</Link>
                </li>
                <li className='hidden sm:block'>
                    <Link href="/">Home</Link>
                </li>
                <li className='hidden sm:block'>
                    <Link href="/about">About</Link>
                </li>
            </ul>
            <Link href={'/'} className='flex gap-1 items-center'>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
                    IMDb
                </span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </Link>
        </div>
    )
}

export default Header