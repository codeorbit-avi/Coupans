import Link from 'next/link';
import React from 'react';
import SignUp from '../singup/page';
export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md animate-fade-in-up">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4  py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <Link href="/SignUp" className="text-purple-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
