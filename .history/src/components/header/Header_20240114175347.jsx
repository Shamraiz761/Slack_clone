import React from 'react'
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left logos */}
        <div >
          {/* Left logo */}
          <div className="mr-4">
            <img src="/left-logo.png" alt="Left Logo" className="h-8" />
          </div>

          {/* Other left logos/icons */}
          {/* Add more logos or icons as needed */}
        </div>

        {/* Center search box */}
        <div className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className=" p-2 bg-gray-700 text-white border-none rounded w-3/4"
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