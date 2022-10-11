// import React from "react";
// import "./Dashboard.css";
// import WT from "../../Assets/1644315606391.jfif";
// import company1 from "../../Assets/1528761134467.jfif";
// import company3 from "../../Assets/1607935979379.jfif";
// import Linke2 from "../../Assets/538-5380153_linkedin-2019-hd-png-download.png";
// import ribbon2 from "../../Assets/70d73e3714c288cf974360e7ea781948.png";
// import cardimg from "../../Assets/466-4661784_offshore-software-software-development-hd-png-download.png";
// const Dashboard = () => {
//   return (
//     <div>

//       <div class="hero min-h-screen bg-base-200">
//         <div class="hero-content flex-col lg:flex-row-reverse">
//           <div class="card-center mt-24 mr-4 mb-20 lg:card-left">
//             {/* card...... */}

//             <div class="card w-96  mb-44 bg-base-100 ">
//               <div class="card-body">
//                 <div>
//                   <h2 class="card-title  text-gray-600">Job seeker guidance</h2>
//                   <p>
//                     <small className="text-gray-500">Recommended based on your activity</small>
//                   </p>
//                 </div>
//                 <div className="flex ">
//                   <h1 className="font-semibold mt-8 ">
//                     I want to improve my resume
//                   </h1>
//                   <img className="cardimg ml-2 rounded-2xl" src={cardimg} alt="img" />
//                 </div>
//                 <p>
//                   <small>
//                     Explore our curated guide of expert-led courses, such as how
//                     to improve your resume and grow your network, to help you
//                     land your next opportunity.
//                   </small>
//                 </p>
//                 <div class="card-actions ">
//                     <h1 className="font-bold text-primary">Show more ➜</h1>
                 
//                 </div>
//               </div>
//             </div>
//             {/* ----------card-end-------------- */}
//             <div className=" more text-sm mr-8">
//                <div className="text-gray-500 "> 
//                <h1><span className="p-4"> About </span>    <span className="p-4"> Accesibility </span>        Help Center</h1>
//                 <h1 className="pt-2"><span className="p-4 "> Privacy & Terms ⇩ </span>    Ad Choices    </h1>
//                 <h1 className="pt-2"> <span className="p-4 "> Advertising </span>    Business Services ⇩</h1>
//                 <h1 className="pt-2"> <span className="p-4"> Get the LinkedIn app </span>    More ⇩</h1></div>
               
//                 <div className="flex mt-2">
//            <img  className="linke2" src={Linke2} alt="img" />
//                   <p className="mt-3 ml-2"> LinkedIn Corporation © 2022</p>  
//                 </div>
//             </div>

//           </div>

//           <div class="card flex-shrink-0 form1 w-3/5 mr-2 outline-1 bg-base-100 ">
//             <div class="card-body">
//               <div className="flex right-0">
//                 <h1 className="text-xl font-bold  text-gray-600 mb-6 ">Recent job searches</h1>
//                 <h1 className="text-clear lg:card-left text-gray-500 font-semibold ">
//                   Clear
//                 </h1>
//               </div>
//               <div class="flex flex-col w-full">
//                 <div>
//                   <h1 className="font-semibold"> MonsterClaw LLC </h1>
//                   <p className="text-gray-500">Dhaka ,Bangladesh</p>
//                 </div>
//                 <div class="divider"></div>
//               </div>
//               <div class="flex flex-col w-full">
//                 <div>
//                   <h1 className="font-semibold"> Orange Toolz </h1>
//                   <p className="text-gray-500">Dhaka ,Bangladesh</p>
//                 </div>
//                 <div class="divider"></div>
//                 <div>
//                   <h1 className="font-semibold">Brain Station 360</h1>
//                   <p className="text-gray-500">Dhaka ,Bangladesh</p>
//                 </div>
//               </div>
//               <div class="divider"></div>
//               <h2 className="text-center text-primary font-bold text-xl">
//                 Show More ˅
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="card flex-shrink-0 card-body  mb-12 second-card outline-1 bg-base-100 ml-8 ">
//         <div class="card-body">
//           <div className="mb-8">
//             <h1 className="text-xl font-bold  text-gray-600 ">Recommended for you</h1>
//             <h1 className=" text-gray-500 font-semibold ">
//               Based on your profile and search history
//             </h1>
//           </div>
//           {/* ////////// */}
//           <div class="flex flex-col w-full">
//             <div className="flex">
//               <img className="img-wt mr-4" src={WT} alt="img" />

//               <div>
//                 <h1 className="font-bold text-primary"> Web Designer</h1>
//                 <h2>Wunderman Thompsom Studios Dhaka</h2>
//                 <p className="text-gray-500">Dhaka ,Bangladesh (on-site)</p>
//               </div>
//               <img className="ribbon2 " src={ribbon2} alt="img" />
//             </div>

//             <div class="divider"></div>
//           </div>

//           <div class="flex flex-col w-full">
//             <div className="flex">
//               <img className="img-wt mr-4" src={company1} alt="img" />

//               <div>
//                 <h1 className="font-bold text-primary"> Front end Developer</h1>
//                 <h2>Wunderman Thompsom Studios Dhaka</h2>
//                 <p className="text-gray-500">Dhaka ,Bangladesh (on-site)</p>
//               </div>
//               <img className="ribbon2 " src={ribbon2} alt="img" />
//             </div>
//             <div class="divider"></div>
//             <div className="flex">
//               <img className="img-wt mr-4" src={company3} alt="img" />

//               <div>
//                 <h1 className="font-bold text-primary">
                
//                   Full Stack developer
//                 </h1>
//                 <h2>Wunderman Thompsom Studios Dhaka</h2>
//                 <p className="text-gray-500">Dhaka ,Bangladesh (on-site)</p>
//               </div>
//               <img className="ribbon2 " src={ribbon2} alt="img" />
//             </div>
//           </div>
//           <div class="divider"></div>
//           <h2 className="text-center text-primary font-bold text-xl">
//             Show More ˅
//           </h2>
//         </div>
//       </div>







//     </div>
//   );
// };

// export default Dashboard;
