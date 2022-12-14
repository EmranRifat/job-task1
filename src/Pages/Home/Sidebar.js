import React from "react";
import "./Dashboard.css";
import "./Sidebar.css";
import WT from "../../Assets/1644315606391.jfif";
import company1 from "../../Assets/1528761134467.jfif";
import company3 from "../../Assets/1607935979379.jfif";
import Linke2 from "../../Assets/538-5380153_linkedin-2019-hd-png-download.png";
import ribbon2 from "../../Assets/70d73e3714c288cf974360e7ea781948.png";
import cardimg from "../../Assets/466-4661784_offshore-software-software-development-hd-png-download.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  BsFillArrowDownLeftCircleFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";
const Sidebar = () => {
  const data = [
    {
      name: "SAT",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "SUN",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "MON",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "TWE",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "WED",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "THU",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "FRI",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data2 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data3 = [
    {
      name: "SUN",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "MON",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "TUE",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "WED",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "THE",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "FRI",
      uv: 2390,
      pv: 3800,
      amt: 500,
    },
    {
      name: "SAT",
      uv: 490,
      pv: 300,
      amt: 100,
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const value = 0.66;
  const value2 = 0.36;


  return (
    <div className="body">
      <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <div>
            <div class="bg-base-200">
              <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card-center mt-24  lg:card-left">
                  {/* mini card...... */}

                  <div className="flex  income	 ml-16  space-x-4 ">
                    <div class="card w-52 groups h-32 bg-primary text-primary-content">
                      <div class="card-body ">
                        <div className="flex">
                          <div>
                            <h2 class="card-title dolar-card">$45,234</h2>
                            <p className="income2">
                              <small>Income</small>
                            </p>
                            <p className="month-card">
                              <small>-2% then last month</small>
                            </p>
                          </div>
                          <div className="">
                            <i class="fa-solid fa-circle-arrow-down h-4 w-6"></i>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card card-two w-52 groups ml-4 h-32  bg-red-600 text-primary-content">
                      <div class="card-body ">
                       <div className="flex">
                       <div>
                       <h2 class="card-title dolar-card">$19,522</h2>
                        <p className="income1">
                          <small>Explore</small>
                        </p>
                        <p className="month-card">
                          <small>-2% then last month</small>
                        </p>
                       </div>

                        <div className="">
                            <i class="fa-solid fa-circle-arrow-up h-4 w-6"></i>{" "}
                          </div>
                       </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-16 transsation  space-x-4  mt-24">
                    <div class="card w-52 groups h-32 bg-white text-primary-content">
                      <div class="card-body">
                        <h2 class="card-title text-black">998</h2>
                        <p><small class="text-gray-600 text-black">Transsation</small></p>
                    
                      </div>
                    </div>
                    <div class="card card-two w-52 groups ml-4 h-32  bg-white text-primary-content">
                      <div class="card-body ">
                    <div className="flex">
                    <div>
                     <h2 class="card-title text-black">1.498</h2>
                        <p><small class="text-gray-600 text-black">Contacts</small></p>
                     </div>
                     <div className="card-progress" style={{ width: 46, height: 100}} >
                     <CircularProgressbar
                     
                      
                     
                        value={value2}
                        maxValue={1}
                        text={`${value * 75}%`}
                      />
                     </div>
                    </div>
                      </div>
                    </div>
                  </div>

                  {/* bar chart start  */}
                  <div className="flex box1 flex-wrap space-x-24 ml-16">
                    <div>
                      <div class="card w-52 mt-4 admission  ml-10  bg-base-100 ">
                        <div class="card-body">
                          <div className="flex ">
                            <div>
                              <p class=" font-semibold text-gray-600">
                                <small>admission summary</small>
                              </p>
                              <p className="text-gray-700 font-bold">$4,563 </p>
                              <p>
                                <small className="text-[green]  text-xs font-semibold">
                                  +1.6% last week
                                </small>
                              </p>
                            </div>
                            <div>
                              <h3 className=" text-3xl mt-4  text-[red]">
                                <BsFillArrowDownLeftCircleFill />
                              </h3>
                            </div>
                          </div>
                          <BarChart
                            width={200}
                            height={180}
                            margin={{ top: 4, right: 20, bottom: 0, left: -25 }}
                            data={data3}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                          </BarChart>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div class="card w-52 mt-4 admission1  bg-base-100 ">
                          <div class="card-body">
                            <div className="flex flex-wrap	">
                              <div>
                                <p class=" font-semibold text-gray-600">
                                  <small>Your balance</small>
                                </p>
                                <p className="text-gray-700 font-bold">
                                  $244,555
                                </p>
                                <p>
                                  <small>
                                    <span className="text-accent"> +2.3%</span>{" "}
                                    then last week
                                  </small>
                                </p>
                              </div>
                              <div>
                                <h3 className=" text-3xl mt-4  text-[red]">
                                  {/* <BsFillArrowDownLeftCircleFill /> */}
                                </h3>
                              </div>
                            </div>
                            <BarChart
                              margin={{
                                top: 4,
                                right: 20,
                                bottom: 5,
                                left: -20,
                              }}
                              width={200}
                              height={220}
                              data={data}
                            >
                              <XAxis dataKey="name" stroke="#8884d8" />
                              <YAxis />
                              <Tooltip />
                              <CartesianGrid
                                stroke="#ccc"
                                strokeDasharray="5 5"
                              />
                              <Bar dataKey="uv" fill="#008000" barSize={30} />
                            </BarChart>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* table start here  */}
                  <div className="">
                    <div class="card table-card  ml-4 mt-4 admission   bg-base-100 ">
                      <div class="card-body">
                        <div className="flex">
                          <div className="ml-8">
                            <p class=" font-semibold text-gray-700">
                              <small>Latest transtations</small>
                            </p>
                            <p className="text-gray-700 text-xs">Loren ipsum  connect</p>
                          </div>
                          <div>
                            <button class="btn btn-link underline  ml-44 font-bold ">
                              Today
                            </button>
                          </div>
                        </div>
                       
                        <div class="overflow-x-auto ">




                          <table class="table ">
                            
                            <tbody>
                                <tr>
                                <th>
                                <button class="btn btn-active btn-ghost w-12 mr-4"></button>

                                </th>
                                <td>
                                  <div class="flex flex-wrap	 items-center space-x-3">
                                    <div class="">

                                    </div>
                                    <div>
                                      <div class="text-sm">Hart Hagerty</div>
                                      <div class="text-sm opacity-50">
                                        United States
                                      </div>
                                    </div>
                                  </div>
                                </td>
                               
                                <td><small>+$5,553</small></td>
                                <th>
                                  <button class=" btn btn-warning w-20 btn-sm">
                                    Pending
                                  </button>
                                </th>
                              </tr>
                              <tr>
                                <th>
                                <button class="btn btn-active btn-ghost w-12 mr-4"></button>

                                </th>
                                <td>
                                  <div class="flex  flex-wrap	 items-center space-x-3">
                                    <div class="">

                                    </div>
                                    <div>
                                      <div class="text-sm">Hart Hagerty</div>
                                      <div class="text-sm opacity-50">
                                        United States
                                      </div>
                                    </div>
                                  </div>
                                </td>
                               
                                <td><small>+$5,553</small></td>
                                <th>
                                  <button class=" btn btn-active btn-ghost w-20 btn-sm">
                                    Cancel
                                  </button>
                                </th>
                              </tr>
                              <tr>
                                <th>
                                <button class="btn btn-active btn-ghost w-12 mr-4"></button>

                                </th>
                                <td>
                                  <div class="flex flex-wrap	 items-center space-x-3">
                                    <div class="avatar">
                                      
                                    </div>
                                    <div>
                                      <div class="text-sm">Brice Swyre</div>
                                      <div class="text-sm opacity-50">
                                        China
                                      </div>
                                    </div>
                                  </div>
                                </td>
                               
                                <td><small>+$5,553</small></td>
                                <th>
                                  <button class="btn btn-warning btn-sm w-20">
                                    Peding
                                  </button>
                                </th>
                              </tr>
                              <tr>
                                <th>
                                <button class="btn btn-active btn-ghost w-12 mr-4"></button>

                                </th>
                                <td>
                                  <div class="flex flex-wrap	 items-center space-x-3">
                                    <div class="avatar">
                                      
                                    </div>
                                    <div>
                                      <div class="text-sm">Marjy Ferencz</div>
                                      <div class="text-sm opacity-50">
                                        Russia
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              
                                <td><small>+$3,553</small></td>
                                <th>
                                  <button class="btn btn-success w-20 btn-sm">
                                   Complate
                                  </button>
                                </th>
                              </tr>
                              <tr>
                                <th>
                                <button class="btn btn-active btn-ghost w-12 mr-4"></button>

                                </th>
                                <td>
                                  <div class="flex flex-wrap	 items-center space-x-3">
                                    <div class="avatar">
                                     
                                    </div>
                                    <div>
                                      <div class="text-sm">Yancy Tear</div>
                                      <div class="text-sm opacity-50">
                                        Brazil
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                
                                <td><small>+$5,553</small></td>
                                <th>
                                  <button class="btn btn-error w-20 btn-sm">
                                    Failed
                                  </button>
                                </th>
                              </tr>
                            </tbody>
                            
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ----------card-end-------------- */}
                </div>

                {/* LINE-CHART START */}

                <div class="card mb-0  mr-8 second-card outline-1 bg-base-100 ">
                  <div class="card-body">
                    <div>
                      <h2 className="font-bold mb-4">Your balence summery</h2>

                      <div className="flex flex-wrap	">
                        <div>
                          <h3 className="icon1 text-3xl text-primary">
                            <BsFillArrowUpRightCircleFill/>
                          </h3>
                        </div>
                        <div className="ml-4">
                          <h4>
                            <small>Income</small>
                          </h4>
                          <h2 className="font-bold">$459,783,04</h2>
                        </div>

                        <div className="ml-28 flex">
                          <h3 className=" text-3xl text-[red]">
                            <BsFillArrowDownLeftCircleFill />
                          </h3>
                          <div className="ml-2 mb-4">
                            <h4>
                              <small> Expence</small>
                            </h4>
                            <h2 className="font-bold">$23,24,21</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div  className="lineChart">
                      <LineChart
                     
                        width={500}
                        height={250}
                        data={data}
                        margin={{ top: 4, right: 20, bottom: 5, left: 15 }}
                      >
                        <Line
                          type="monotone"
                          barSize={10}
                          dataKey="uv"
                          stroke="#8884d8"
                        />
                        <Line
                          type="monotone"
                          barSize={10}
                          dataKey="pv"
                          stroke="#82ca9d"
                        />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                      </LineChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Line chart end */}

            <div className="flex flex-wrap	">
              <div class="card fit-content w-72 ml-4 pie  mb-10 bg-base-100 ">
                <div class="card-body">
                  <h2 className="font-bold mb-4">Pie Chart</h2>
                  <PieChart
                    width={250}
                    height={180}
                    margin={{ top: -120, right: 50, bottom: 25, left: -10 }}
                  >
                    <Pie
                      data={data2}
                      cx={120}
                      cy={200}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Pie
                      data={data2}
                      cx={420}
                      cy={200}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    ></Pie>
                  </PieChart>

                  <div className="flex flex-wrap	 space-x-12 ">
                    <div>
                      <p>????Green</p>
                      <p>????red</p>
                    </div>
                    <div>
                      <p>????Blue</p>
                      <p>????Yellow</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* contact start */}
              <div class="card  w-72 ml-6 contact  mb-40 bg-base-100 ">
                <div class="card-body">
                  <div className="flex flex-wrap	">
                    <div>
                      <h2 className="font-bold mb-4">Contacts</h2>
                      <p className="text-gray-600 mb-4">
                        <small>You have 450 contactss</small>
                      </p>
                    </div>
                    <button class="btn btn-primary ml-12">+</button>
                  </div>
                  <div className="flex flex-wrap	">
                    <button class="btn btn-active btn-ghost w-12 mr-4"></button>
                    <div>
                      <p>Alex Choye</p>
                      <p className="text-gray-600 mb-4">
                        <small>Marketing maneger</small>
                      </p>
                    </div>
                    <div className="ml-6 mt-2">??????</div>
                  </div>
                  <div className="flex flex-wrap	">
                    <button class="btn btn-active btn-ghost w-12 mr-4"></button>
                    <div>
                      <p>Bella Browne</p>
                      <p className="text-gray-600 mb-4">
                        <small>Marketing maneger</small>
                      </p>
                    </div>
                    <div className="ml-6 mt-2">??????</div>
                  </div>
                  <div className="flex flex-wrap	">
                    <button class="btn btn-active btn-ghost w-12 mr-4"></button>
                    <div>
                      <p>Evans Jhone</p>
                      <p className="text-gray-600 mb-4">
                        <small>Marketing maneger</small>
                      </p>
                    </div>
                    <div className="ml-6 mt-2">??????</div>
                  </div>
                  <div className="flex flex-wrap	">
                    <button class="btn btn-active btn-ghost w-12 mr-4"></button>
                    <div>
                      <p>Alex Choye</p>
                      <p className="text-gray-600 mb-4">
                        <small>Marketing maneger</small>
                      </p>
                    </div>
                    <div className="ml-6 mt-2">??????</div>
                  </div>
                  <button class="btn btn-outline btn-primary">View more</button>
                </div>
              </div>
            </div>

            {/* Earning start */}
            <div className="flex flex-wrap	">
              <div class="card  upper colum-card w-72 ml-4  mb-40 bg-base-100 ">
                <div class="card-body">
                  <div className="flex">
                    <div>
                      <h2 className="font-bold mb-4">Earning catagorie</h2>
                      <p className="text-gray-600 mb-4">
                        <small>lorem ipsum ten dolar shit </small>
                      </p>
                    </div>
                  </div>

                  <progress
                    class="progress progress-primary w-56"
                    value="40"
                    max="100"
                  ></progress>
                  <div className="flex">
                    <p>#investment</p>
                    <p className="text-gray-400 mb-4">
                      <small>$542.23</small>
                    </p>
                  </div>
                  <progress
                    class="progress progress-primary w-56"
                    value="70"
                    max="100"
                  ></progress>

                  <div className="flex">
                    <p>#Business</p>
                    <p className="text-gray-400 mb-4">
                      <small>$542.23</small>
                    </p>
                  </div>
                  <progress
                    class="progress progress-primary w-56"
                    value="60"
                    max="100"
                  ></progress>
                  <div className="flex">
                    <p>#transfer</p>
                    <p className="text-gray-400 mb-4">
                      <small>$542.23</small>
                    </p>
                  </div>
                  <progress
                    class="progress progress-primary w-56"
                    value="20"
                    max="100"
                  ></progress>

                  <div className="flex">
                    <p>#transfer</p>
                    <p className="text-gray-400 mb-4">
                      <small>$542.23</small>
                    </p>
                  </div>
                  <p className="font-bold ">Others tag</p>
                  <div className="flex 	">
                    <div>
                      <button class="btn btn-active btn-sm btn-ghost h-6 w-24 mb-2 ">
                        <span className="text-primary">#TeamWork</span>
                      </button>
                      <button class="btn btn-active btn-sm btn-ghost h-6 w-40">
                        <span className="text-primary">#ProjectManagement</span>
                      </button>
                    </div>
                    <div>
                      <button class="btn btn-active btn-sm btn-ghost mb-2 mr-20 h-6 w-16 design-btn">
                        <span className="text-primary">Design</span>
                      </button>
                      <button class="btn btn-active btn-sm btn-ghost h-6 w-10 ml-3">
                        <span className="text-primary">16+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* others start */}
              <div class="card colum-card w-72 ml-6 mb-40 bg-base-100 ">
                <div class="card-body">
                  <div className="flex">
                    <div>
                      <h2 className="font-bold mb-4">Others</h2>
                      <p className="text-gray-600 mb-4">
                        <small>lorem ipsum ten dolar amet </small>
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-6" style={{ width: 40, height: 100 }}>
                      <CircularProgressbar
                        value={value}
                        maxValue={1}
                        text={`${value * 100}%`}
                      />
                    </div>
                    <div>
                      <p>installment</p>
                      <p>
                        <small className="text-gray-400 mb-4">$54,12</small>
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-6" style={{ width: 40, height: 100 }}>
                      <CircularProgressbar
                        value={value}
                        maxValue={1}
                        text={`${value * 100}%`}
                      />
                    </div>
                    <div>
                      <p>Property</p>
                      <p>
                        <small className="text-gray-400 mb-4">$54,12</small>
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-6" style={{ width: 40, height: 100 }}>
                      <CircularProgressbar
                        value={value}
                        maxValue={1}
                        text={`${value * 100}%`}
                      />
                    </div>
                    <div>
                      <p>installment</p>
                      <p>
                        <small className="text-gray-400 mb-4">$54,12</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
