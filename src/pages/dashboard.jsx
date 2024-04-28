import React, { useEffect, useState } from "react";
import events from "./../images/events.jpeg"
import bg13 from "./../images/bg13.jpeg"
import instance from "../utils/axios";
export default function Dashboard() {
    const [events, setEvents] = useState()
    useEffect(() => {
        const fetchEvents = () => {
            instance.get('/events')
                .then((response) => {
                    if (response.data) {
                        setEvents(response.data)
                    }
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
        fetchEvents()
    }, [])
    return (
        <a href="dashboard">
            <div className="flex" style={{ fontFamily: "Arial" }} x-data="{ open: true }">
                <div className="sidebar h-screen" style={{ width: "250px" }} x-show="open">
                    <div>
                        <div className="text-purple-200 bg-pink-700 h-14 mx-auto block px-4 py-5">
                            WELCOME, ADMIN
                        </div>
                        <div className="h-screen bg-pink-700 ">
                            <div className="font-size: 14px;">
                                <a
                                    href=""
                                    className="h-12 px-4 py-3 text-black tracking-wider block bg-white font-medium border-b-2 border-pink-800 hover:text-pink-800 hover:bg-white"
                                >
                                    Dashboard
                                </a>
                                <a
                                    href="#events"
                                    className="h-12 px-4 py-3 text-white tracking-wider block bg-pink-600 font-thin border-b-2 border-pink-800 hover:text-pink-800 hover:bg-white"
                                >
                                    Events
                                </a>
                                <a
                                    href=""
                                    className="h-12 px-4 py-3 text-white tracking-wider block bg-pink-600 font-thin border-b-2 border-pink-800 hover:text-pink-800 hover:bg-white"
                                >
                                    Booking
                                </a>
                                <a
                                    href="/events"
                                    className="h-12 px-4 py-3 text-white tracking-wider block bg-pink-600 font-thin border-b-2 border-pink-800 hover:text-pink-800 hover:bg-white"
                                >
                                    Users
                                </a>
                                <a
                                    href=""
                                    className="h-12 px-4 py-3 text-white tracking-wider block bg-pink-600 font-thin border-b-2 border-pink-800 hover:text-pink-800 hover:bg-white"
                                >
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full z-10">
                    <div className="sticky top-0 bg-pink-600 header h-14 px-10 py-4 border-b-4 border-pink-900 flex items-center justify-between">
                        <div className="flex items-center space-x-12 text-sm">
                            <a href="" className="hover:text-purple-400 text-white tracking-wider font-thin">
                                <span>Dashboard</span>
                            </a>
                            <a href="" className="hover:text-purple-400 text-white tracking-wider font-thin">
                                User
                            </a>
                            <a href="" className="hover:text-purple-400 text-white tracking-wider font-thin">
                                Settings
                            </a>
                        </div>
                        <div className="flex items-center space-x-8 text-gray-400 text-base px-4 py-2">
                            <span className="relative inline-block cursor-pointer">
                                <i className="fas fa-bell font-thin"></i>
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-thin leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">99</span>
                            </span>
                            <span className="relative inline-block cursor-pointer">
                                <i className="fas fa-list font-thin"></i>
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-thin leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">99</span>
                            </span>
                            <span className="relative inline-block cursor-pointer">
                                <i className="fas fa-envelope font-thin"></i>
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-thin leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full">9</span>
                            </span>
                            <i className="fas fa-user-circle fa-lg font-thin cursor-pointer"></i>
                            <i className="fas fa-cog fa-2x font-thin text-white cursor-pointer animate animate-spin hover:text-green-500" style={{ animationDuration: "7000ms" }}></i>
                        </div>
                    </div>
                    <div className="sticky top-14 header bg-white h-12 px-10 py-4 border-b-2 border-gray-200 flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-gray-400 text-base">
                            <a href="/home"><span className="text-black tracking-wider font-thin text-sm">Home</span></a>
                            <span>/</span>
                            <span className="tracking-wide text-sm">
                                <span className="hover:underline cursor-pointer" style={{ color: "#20a8d8", fontWeight: 100 }}>Admin</span>
                            </span>
                            <span>/</span>
                            <span className="text-black tracking-wider font-thin text-sm text-opacity-50">Dashboard</span>
                        </div>
                        <div className="flex items-center space-x-6 text-gray-400 text-base ">
                            <i className="fas fa-comment-alt mr-1 text-pink-500"></i>
                            <a href="" className="mr-3 text-black">
                                <i className="fas fa-chart-line text-purple-500"></i>
                                <span className="hover:text-purple-400 text-black text-opacity-50 tracking-wider font-thin">Dashboard</span>
                            </a>
                            <a href="" className="text-black">
                                <i className="fas fa-cog text-purple-500"></i>
                                <span className="hover:text-pink-400 text-black text-opacity-50 tracking-wider font-thin">Setting</span>
                            </a>
                        </div>
                    </div>
                    <div className="body  bg-gray-300 border-2 border-gray-300 pt-26">
                    {events && events?.map(event => (
    <div key={event._id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center w-[380px]">
        <div className="flex flex-col">
        <img src={event.profileImg} alt={event.title} className="w-48 h-32 object-fit rounded-sm mr-4" />
            <p className="text-gray-500 mb-2">Location: {event.location}</p>
            <p className="text-gray-500 mb-2">Date: {event.date}</p>
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
                Add event
            </button>
        </div>
    </div>
))}

                        {/* 
            <div className="cards">
              <div className=" bg- px-8 mt-8">
                <img src={events} alt="" />
              </div>
              <div>
                <h3 className="card-title">New Event</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quos, sapiente provident deleniti aperiam dolor at vitae.</p>
                <button className=" bg-pink-700  hover:bg-slate-300 text-gray-700 font-bold py-2 px-4 ml-14 my-4 rounded ">Add event</button>
              </div>
           </div>
           <div className="cards">
              <div className=" bg- px-8 mt-8">
                <img src={events} alt="" />
              </div>
              <div>
                <h3 className="card-title">New Event</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quos, sapiente provident deleniti aperiam dolor at vitae.</p>
                <button className=" bg-pink-700  hover:bg-slate-300 text-gray-700 font-bold py-2 px-4 ml-14 my-4 rounded ">Add event</button>
              </div>
           </div>
           <div className="cards">
              <div className=" bg- px-8 mt-8">
                <img src={events} alt="" />
              </div>
              <div>
                <h3 className="card-title">New Event</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quos, sapiente provident deleniti aperiam dolor at vitae.</p>
                <button className=" bg-pink-700  hover:bg-slate-300 text-gray-700 font-bold py-2 px-4 ml-14 my-4 rounded ">Add event</button>
              </div>
           </div>
           <div className="cards">
              <div className=" bg- px-8 mt-8">
                <img src={events} alt="" />
              </div>
              <div>
                <h3 className="card-title">New Event</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quos, sapiente provident deleniti aperiam dolor at vitae.</p>
                <button className=" bg-pink-700  hover:bg-slate-300 text-gray-700 font-bold py-2 px-4 ml-14 my-4 rounded ">Add event</button>
              </div>
           </div> */}

                        {/* </div> */}




                    </div>





                </div>
            </div>
        </a>
    );
}
