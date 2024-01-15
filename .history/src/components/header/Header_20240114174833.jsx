import React from 'react'

function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left logos */}
        <div className="flex items-center">
          {/* Left logo */}
          <div className="mr-4">
            <img src="/left-logo.png" alt="Left Logo" className="h-8" />
          </div>

          {/* Other left logos/icons */}
          {/* Add more logos or icons as needed */}
        </div>

        {/* Center search box */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search..."
            className=" p-2 bg-gray-700 text-white border-none rounded"
          />
        </div>

        {/* Right logos */}
        <div className="flex items-center">
          {/* Other right logos/icons */}
          {/* Add more logos or icons as needed */}

          {/* Right logo */}
          <div className="ml-4">
            <img src="/right-logo.png" alt="Right Logo" className="h-8" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header