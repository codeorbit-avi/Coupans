import React from 'react'
import Link from 'next/link';
import singup from '@/app/singup/page'
const Navbarpage = () => {
    

    return (

        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 animate-fade-in-down">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

                <div className="text-2xl font-bold text-purple-700 tracking-wide hover:text-purple-900 transition duration-300 ease-in-out">
                     Coupon
                </div>

        
                <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <a href="#" className="hover:text-purple-600 transition duration-300 ease-in-out">Home</a>
                    <a href="#" className="hover:text-purple-600 transition duration-300 ease-in-out">Coupons</a>
                    <a href="#" className="hover:text-purple-600 transition duration-300 ease-in-out">Categories</a>
                    <a href="#" className="hover:text-purple-600 transition duration-300 ease-in-out">Contact</a>
                </nav>

                <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out">
                   <Link href='/singup'>Sign Up</Link>
                </div>
            </div>
        </header>

    )
}

export default Navbarpage;