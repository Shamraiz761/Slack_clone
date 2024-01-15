import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <nav className="bg-[#45013b] p-4" style={{background:''}}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Left logos */}
        <div >
          {/* Left logo */}
          <div className="mr-4">
          <AccountCircleIcon className='text-white text-3xl' style={{fontSize:'200px'}}/>

          </div>

         
        </div>

       
        <div className="w-full flex justify-center items-center">
        <div className="mr-4">
            <AccessTimeIcon className='text-white'/>
          

          </div>
          <input
            type="text"
            placeholder="Search"
            className=" p-2 px-12 bg-[#57014a] text-white border-none rounded w-64 md:w-3/5"
          />
        </div>

        {/* Right logos */}
        <div className="flex items-center">
        
          <div className="ml-4">
            <HelpOutlineIcon className='text-white'/>
           
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header