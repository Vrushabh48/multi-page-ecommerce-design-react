import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="bg-[#F3F7EC]">
        <div className="navbar align-element grid grid-cols-3 pl-9 pr-9">
            <div className="navbar-start p-2">
                Logo
            </div>
            <div className="navbar-center hidden lg:flex p-2">
                
                <nav>
      <ul className="menu menu-horizontal flex gap-5">
        <li className="rounded p-2 bg-[#F3F7EC] text-black hover:bg-slate-400">
          <Link to="/">Home</Link>
        </li>
        <li className="rounded p-2 bg-[#F3F7EC] text-black hover:bg-slate-400">
          <Link to="/about">About</Link>
        </li>
        <li className="rounded p-2 bg-[#F3F7EC] text-black hover:bg-slate-400">
          <Link to="/products">Products</Link>
        </li>
        <li className="rounded p-2 bg-[#F3F7EC] text-black hover:bg-slate-400">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
            </div>
            <div>

            </div>
        </div>
        </nav>
    )
}