import Header from "../components/header";


export default function About(){
    return(
        <>
            <Header/>
            <div class="pt-14  bg-slate-100 ">
                    <div class = "text-gray-700 text-center mt-12">
                        <h3 class = "text-4xl text-pink-700 font-bold">Welcome</h3>
                        <h4 class ="font-semibold my-2"> Event dolor sit amet consectetur adipisicing</h4>
                        <p class="text-center mx-20 my-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Adipisci perferendis, quod soluta dolorem impedit a omnis quia illum 
                            suscipit ipsa similique ducimus deserunt facere non dignissimos consequatur voluptatibus repudiandae blanditiis.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Adipisci perferendis, quod soluta dolorem impedit a omnis quia illum 
                            suscipit ipsa similique ducimus deserunt facere non dignissimos consequatur voluptatibus repudiandae blanditiis.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 pt-10 px-12 ml-11 mb-4 mr-11">
                    
                    <div class="border border-t-0 border-l-0  border-gray-300 rounded-4 p-4 flex transition duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                        <svg class ="w-14 text-red font-bold mt-11" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path>
                        </svg>
                        </div>
                    
                        <div>
                        <h3 class= "ml-4 text-2xl text-pink-700 font-bold ">Wedding</h3>
                        <p class = "mt-2 ml-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem dolores quas dolor at  ?</p>
                        </div>
                    </div>

                    
                    <div class="border border-t-0 border-l-0 border-gray-300 rounded-0 p-4 flex transition duration-300 ease-in-out transform hover:shadow-2xl ">
                        <div>
                        <svg class ="w-14 text-red font-bold mt-11" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"></path>
                    </svg>
                        </div>
                    
                    <div>
                    <h3 class= "ml-4 text-2xl text-pink-700 font-bold ">Birthday</h3>
                        <p class = "mt-2 ml-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem dolores quas dolor at  ?</p>
                    </div>
                    </div>

                    <div class="border border-t-0 border-l-0 border-gray-300 rounded-0 p-4 flex transition duration-300 ease-in-out transform hover:shadow-2xl ">
                        <div>
                        <svg class ="w-14 text-red font-bold mt-11" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"></path>
                        </svg>
                        </div>
                    
                    <div>
                    <h3 class= "ml-4 text-2xl text-pink-700 font-bold ">Graduation</h3>
                        <p class = "mt-2 ml-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem dolores quas dolor at  ?</p>
                    </div>
                    </div>


                    <div class="border border-t-0 border-l-0 border-gray-300 rounded-0 p-4 flex transition duration-300 ease-in-out transform hover:shadow-2xl ">
                        <div>
                        <svg class ="w-14 text-red font-bold mt-11"  data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path>
                        </svg>
                        </div>
                    
                    <div>
                    <h3 class= "ml-4 text-2xl text-pink-700 font-bold ">Photograpy</h3>
                        <p class = "mt-2 ml-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem dolores quas dolor at  ?</p>
                    </div>
                    </div>

                    <div class="border border-t-0 border-l-0 border-gray-300 rounded-0 p-4 flex transition duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                        <svg class ="w-14 text-red font-bold mt-11"  data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"></path>
                        </svg>
                        </div>
                    
                    <div>
                    <h3 class= "ml-4 text-2xl text-pink-700 font-bold ">Conferences</h3>
                        <p class = "mt-2 ml-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem dolores quas dolor at  ?</p>
                    </div>
                    </div>

                    <div class="border border-t-0 border-l-0 border-gray-300 rounded-0 p-4 flex transition duration-300 ease-in-out transform hover:shadow-2xl">
                        <div>
                        <svg class ="w-14 text-red font-bold mt-11" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                        </svg>
                        </div>
                    
                    <div>
                    <h3 class= "ml-4 text-2xl text-pink-700 font-bold mb-0 ">Fashion</h3>
                        <p class = "mt-2 ml-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium autem dolores quas dolor at  ?</p>
                    </div>
                    </div>
                </div>

                <div class= " bg-[url('./images/bg11.jpeg')] bg-cover bg-center  h-[400px] mb-6">
                    <div class =" bg-slate-400 bg-opacity-20 h-[100vh]">
                        <h2 class = "text-center font-semibold text-4xl pt-20">Your Wish Is Our Command!</h2>
                        <h4 class ="font-semibold my-2 text-center"> Event dolor sit amet consectetur adipisicing</h4>
                        <div class= "flex justify-evenly">
                            <div>
                            <svg class ="w-10 text-red font-bold ml-4"  data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path>
                            </svg>
                            <span class = "font-semibold text-pink-700 text-4xl ">1058</span>
                            <p class = "font-semibold "> Events</p>
                            </div>
                            <div>
                            <svg class ="w-10 text-red font-bold ml-4" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                            </svg>
                            <span class = "font-semibold text-pink-700 text-4xl ">890</span>
                            <p class = "font-semibold ">Services</p>
                            </div>
                            <div>
                            <svg class ="w-10 text-red font-bold ml-4"  data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"></path>
                            </svg>
                            <span class = "font-semibold text-pink-700 text-4xl ">2043</span>
                            <p class = "font-semibold ">Happy clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}