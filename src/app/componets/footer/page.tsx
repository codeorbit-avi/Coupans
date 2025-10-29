import React from 'react'

const Footerpage = () => {
    return (
        <footer className="bg-gradient-to-br from-purple-100 to-blue-100 text-gray-700 mt-20 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

 
                <div>
                    <h3 className="text-2xl font-bold text-purple-700 mb-2">Coupon</h3>
                    <p className="text-sm">Find the best deals, discounts, and promo codes every day. Save more, shop smarter.</p>
                </div>

             
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-purple-600 transition">Home</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition">Coupons</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition">Categories</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition">Contact</a></li>
                    </ul>
                </div>

       
                <div>
                    <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="text-purple-600 hover:text-purple-800 transition"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-purple-600 hover:text-purple-800 transition"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-purple-600 hover:text-purple-800 transition"><i className="fab fa-instagram"></i></a>
                    </div>
                    <form className="flex">
                        <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 transition">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="text-center text-sm py-4 border-t border-gray-300">
                © 2025 Coupon. All rights reserved.
            </div>
        </footer>
    )
}

export default Footerpage