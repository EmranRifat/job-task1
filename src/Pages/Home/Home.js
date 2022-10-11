import React from 'react';
import "./Home.css";
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-base-200 '>
<div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    {/* <!-- Page content here --> */}
    {/* <h2 className='text-5xl text-center'>dashboad</h2> */}

    <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-68 h-auto  outline-1 	  bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className='text-gray-600  font-normal'><a><i class="side-icon fa-regular fa-rectangle-list"></i>Dashboard</a></li>
      <li className='text-gray-600  font-normal'><a><i class="side-icon fa-regular fa-file"></i>my wallet ▸</a></li>
      <li className='text-gray-600  font-normal'><a><i class="side-icon fa-solid fa-money-bill"></i>Transactions <div class="badge badge-primary">14</div></a></li>
      <li className='text-gray-600  font-normal'><a><i class="side-icon fa-regular fa-square-check"></i>Invoice</a></li>
      <li className='text-gray-600  font-normal'><a><i class="side-icon fa-regular fa-rectangle-list"></i> Card center</a></li>

      <p><small className='text-gray-600  font-semibold ml-4'>Others</small></p>
      <li className='text-gray-600  font-normal'><a><i class="side-icon fa-regular fa-file"></i>contacts ▸</a></li>
      <li className='text-gray-600  font-normal'><a>⌫ Messages  <div class="badge badge-secondary">NEW</div></a></li>
      <li className='text-gray-600  font-normal'><a><i class="fa-solid fa-sliders"></i> Setting</a></li>
   
   <div>
   <p className='font-bold mt-8'><small>Dolt personal banking admin</small></p>
   <p><small className='text-gray-500  '>@all rught reserved</small></p>

   </div>



    </ul>



  </div>
        
    
</div> 

 </div>
    );
};

export default Home;