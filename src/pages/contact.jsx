import Header from "../components/header";
import { useForm } from "react-hook-form";

export default function Contact(){
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data)
    return(
        <>
            <Header/>
            <div >
                <div class= " bg-[url('./images/img5.jpg')] bg-cover bg-center  h-[400px]  ">
                    <div class =" bg-slate-300 bg-opacity-30 h-[400px]">
                    <h2 class =" text-6xl p-32 text-pink-700">Message Us</h2>
                </div>
                <div class = "text-black  flex flex-wrap  justify-evenly">
                    <div class = "text-gray-700 pt-10 font-semibold">
                    <h3 class ="text-4xl font-semibold my-8 ">Contact Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut id leo tempor,<br /> congue justo at, lobortis orci.  Ut id leo tempor, congue justo at, lobortis orci.</p>
                    <svg className="icons" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
                    </svg>
                    <span >123 Fifth Avenue ,Kigali , KST 206</span>
                    <svg className="icons" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"></path>
                    </svg>
                    <span>+254 721 123 456</span>
                    <svg className="icons" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                    </svg>
                    <span>umbereyecarine@gmail.com</span>
                    </div>

                    <div class ="pt-10">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name:
                            </label>
                            <input className="inputs" id="name" type="text" placeholder="Enter your name" {...register("firstName", { required: true, maxLength: 50 })} />
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Email:
                            </label>
                            <input className="inputs" {...register("mail", { required: "Email Address is required" })} aria-invalid={errors.mail ? "true" : "false"} />
                            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Subject:
                            </label>
                            <input className="inputs" id="subject" type="text" placeholder="Subject" {...register("firstName", { required: true, maxLength: 25 })} />
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Message:
                            </label>
                            <textarea className="inputs h-[100px]" id="message" type="text" placeholder="Enter your message..." {...register("firstName", { required: true, maxLength: 1000 })} /> <br />
                            <button className="btn">Send</button>
                        </form>
                        </div>
                </div>

           
            </div>
           

          </div>
       </>
    )
}