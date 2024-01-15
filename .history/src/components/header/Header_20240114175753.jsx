import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left logos */}
        <div >
          {/* Left logo */}
          <div className="mr-4">
           <AccessTimeIcon className='text-white'/>
          </div>

          {/* Other left logos/icons */}
          {/* Add more logos or icons as needed */}
        </div>

        {/* Center search box */}
        <div className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className=" p-2 bg-gray-700 text-white border-none rounded w-64 md:w-3/5"
          />
        </div>

        {/* Right logos */}
        <div className="flex items-center">
        
          <div className="ml-4">
            <HelpOutlineIcon cla
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header