import React from 'react'
import Link from 'next/link'

const Dashbordpage = () => {
    return (

        <div className="bg-gradient-to-br from-purple-100 to-blue-100 font-sans">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <img src="https://source.unsplash.com/featured/?shopping" alt="Coupons" className="absolute top-0 left-0 w-full h-full object-cover opacity-30" />
                <div className="relative z-10 text-center animate-fade-in-up">
                    <h1 className="text-5xl font-bold text-purple-800 drop-shadow-lg">Unlock Deals Daily</h1>
                    <p className="mt-4 text-lg text-gray-700">Your gateway to the best coupons online</p>
                    <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
                        <Link href='/next'>Browse Coupons</Link>
                    </button>
                </div>
            </section>
            <section className="py-16 px-6 md:px-20 bg-white">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10 animate-fade-in-down">🔥 Featured Coupons</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-r from-pink-300 to-purple-300 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out animate-slide-in-left">
                        <h3 className="text-xl font-bold text-white">50% Off Electronics</h3>
                        <p className="text-white mt-2">Valid till Oct 30</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-300 to-blue-300 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out animate-slide-in-up">
                        <h3 className="text-xl font-bold text-white">Buy 1 Get 1 Free</h3>
                        <p className="text-white mt-2">On select fashion items</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-300 to-red-300 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out animate-slide-in-right">
                        <h3 className="text-xl font-bold text-white">30% Off Groceries</h3>
                        <p className="text-white mt-2">Limited time offer</p>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Dashbordpage