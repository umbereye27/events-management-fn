import Header from "../components/header";
import About from "./about";
import Contact from "./contact";
// import Login from "./login";
// import Register from "./register";
import Dashboard from "./dashboard";
export default function Home() {
    return (
        <>
            <Header />
            
            <div class=" text-white bg-slate-500">
                <section id="home">
                <main class=" bg-[url('./images/bg2.jpeg')] bg-cover bg-center  h-[700px] mx-auto  py-2" id="home">


                    <header color="text-center ">
                        <h2 class=" text-white text-5xl font-semibold px-12 ml-11 mt-56 top-80">We Celebrate <span class=" text-pink-700 ">Every Party!!</span></h2>
                    </header>
                    <p class="font-semibold text-white pt-10 px-12 ml-11 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deleniti incidunt, <br />
                        nam cupiditate molestiae dolor soluta saepe illo.</p>
                    <span class="uppercase  px-12 ml-11">Learn more</span>
                </main>
                <a href="/dashboard">Dashhh</a>
                </section>

            </div>
            <section id="about">
                <About />
            </section>
            <section id="contact">
                <Contact />
            </section>
           
            {/* <Login/> */}
            {/* <Register/> */}
            {/* <Dashboard /> */}
        </>
    )
}