import React from 'react'

const AccountCreation = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Column - Create Account */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">Create Your Account</h3>
          <p className="text-slate-600">Join our community and access personalized care plans and treatment options.</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started Today
          </button>
        </form>
      </div>

      {/* Right Column - Sign In */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">Already have an account?</h3>
          <p className="text-slate-600">Sign in to access your personalized dashboard and continue your wellness journey.</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-white text-blue-600 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 border border-blue-200"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default AccountCreation
