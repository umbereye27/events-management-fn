
export default function Header(){
    return(
        
      <div class = "bg-stone-900 text-white bg-opacity-40 w-full fixed top-0 z-50">
      <nav class = "flex px-0 py-4 justify-around">
        <div>
          <h1 class = " text-pink-700 text-4xl font-bold ">
            <a href="/">Events</a>
          </h1>
        </div>
        <ul class = "flex gap-12 text-lg mt-2">
          <li>
            <a href="/">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="/login">
              <span>Login</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    )
}