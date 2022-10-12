import React from 'react';

const Navar = () => {
  return (
    <div>
      <div class="navbar bg-base-100">
  <div class="navbar-start">
  

<div className='flex'>
<div class="dropdown  ">
      <label tabindex="0" class="btn btn-ghost btn-circle text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

      </label>
      <ul tabindex="0" class="menu menu-compact text-[black] dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Dashboard</a></li>
        <li><a>My Wallet</a></li>
        <li><a>Transsations</a></li>
        <li><a>Invoice</a></li>
        <li><a>Card Center</a></li>
        <li><a>Contact</a></li>
        <li><a>Message</a></li>
        <li><a>Setting</a></li>
      </ul>

    </div>
<h1 className='font-bold text-4xl'>doit</h1>

</div>

   
  </div>
  <div class="dropdown  ">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

      </label>
   

    </div>
  <div class="navbar-center">
    
    <a class="btn btn-ghost normal-case font-bold text-xl">Dashboard</a>
  </div>
  <div class="form-control">
<svg className="text-base-content pointer-events-none absolute z-1 my-2 ml-24 mb-2 stroke-current opacity-60 m-4  " width="20" height="26" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>


<div>  <input  type="text" name="search"  placeholder= " Search here..."  className="input  input-bordered w-72 h-10 fill search-area ml-4" /></div>
  
</div>
  <div class="navbar-end">
  <div className='mr-20'>
  <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">68</span>
        </div>
      </label>
  <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">14</span>
        </div>
      </label>
  </div>
      <div tabindex="1" class="avatar flex mr-6">
     
  
     <p className='mr-4  font-bold text-gray-700'><small>Adam Jackson</small></p>
        {/* <p className='mr-4   text-gray-500'><small>@adamJackson</small></p> */}
  
        
          <div class="w-10 rounded nav-img">
          <img src="https://placeimg.com/80/80/people" />
        </div>
  
        
      </div>
   
    
  </div>
</div>
    </div>
  );
};

export default Navar;