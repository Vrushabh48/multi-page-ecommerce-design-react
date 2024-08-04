

export default function Navbar(){
    return(
        <nav className="bg-[#F3F7EC]">
        <div className="navbar align-element grid grid-cols-3 pl-9 pr-9">
            <div className="navbar-start p-2">
                Logo
            </div>
            <div className="navbar-center hidden lg:flex p-2">
                <ul className="menu menu-horizontal flex gap-5">
                    <li className="rounded p-2 bg-[#F3F7EC] text-black hover:bg-slate-400"><a href="">Home</a></li>
                    <li className="rounded p-2 bg-[#F3F7EC] text-black hover:bg-slate-400"><a href="">About</a></li>
                    <li className="rounded p-2 bg-[#F3F7EC] text-black hover:bg-slate-400"><a href="">Products</a></li>
                    <li className="rounded p-2 bg-[#F3F7EC] text-black hover:bg-slate-400"><a href="">Cart</a></li>
                </ul>
            </div>
            <div>

            </div>
        </div>
        </nav>
    )
}