import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    
    <nav className="bg-[#45013b] " style={{height:'15vh'}} >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left logos */}
        
          {/* Left logo */}
          <div className=" sm:mr-4 hidden sm:block">
          <AccountCircleIcon className='text-white text-larger hidden sm:block' style={{fontSize:'43px'}}/>

          </div>

         
       

       
        <div className="sm:w-full flex justify-center items-center">
        <div className="mr-2">
            <AccessTimeIcon className='text-white'/>
          

          </div>
          <input
            type="text"
            placeholder="Search"
            className=" p-2 px-12 bg-[#57014a] text-white border-none rounded w-32 sm:w-3/5"
          />
        </div>

        {/* Right logos */}
        <div className="flex items-center">
        
          <div className="ml-[-100px] sm:ml-4">
            <HelpOutlineIcon className='text-white'/>
           
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header