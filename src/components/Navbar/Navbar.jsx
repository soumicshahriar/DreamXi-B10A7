import { useState } from 'react';
import logo from '../../../design_details/assets/logo.png'
import { BiSolidDollarCircle } from "react-icons/bi";
import bgshadow from '../../../design_details/assets/bg-shadow.png'
import banner from '../../../design_details/assets/banner-main.png'


const Navbar = ({handleClaimFreeCredit, coins}) => {
 return (
  <div className='w-11/12 mx-auto'>
   <div className='flex justify-between items-center my-4'>
    <div>
     <img src={logo} alt="" />
    </div>

    <div className='flex items-center gap-4'>
     <a href="#">Home</a>
     <a href="#">Fixture</a>
     <a href="#">Teams</a>
     <a href="#">Schedules</a>
     <button className='border-2 p-2 rounded-md flex items-center gap-1'><span>{coins}</span>Coin <BiSolidDollarCircle className='text-yellow-500 ' /></button>
    </div>
   </div>
   <hr className='border-2 opacity-45 my-4' />

   <div>
    <div className=" bg-base-100 shadow-sm rounded-md relative w-full h-100 md:h-auto">
     <img className='rounded-md bg-black w-full h-full'
      src={bgshadow}
      alt="banner" />
     <div className='absolute  flex flex-col gap-2 text-white items-center justify-center inset-0 rounded-lg'>
      <img className='w-24 h-24' src={banner} alt="" />
      <h1 className="md:text-3xl text-sm">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className='opacity-80 text-sm'>Beyond Boundaries Beyond Limits</p>
      <button onClick={()=>handleClaimFreeCredit()} className='border border-yellow-400 text-sm py-3 px-2 rounded-md hover:scale-110 hover:cursor-pointer ease-in-out duration-1000'><span className='bg-yellow-400 p-2 rounded-md text-black font-bold shadow-amber-300 shadow-lg'>Claim Free Credit</span></button>
     </div>
    </div>

   </div>
  </div>
 );
};

export default Navbar;