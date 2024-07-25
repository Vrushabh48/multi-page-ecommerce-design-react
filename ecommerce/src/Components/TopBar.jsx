

export default function TopBar(){
    return(
        <div className="text-right dark:bg-gray-900 ">
            <header className="bg-neutral py-2 text-neutral-content">
                <div className=" pl-7 pr-7 align-element flex justify-center sm:justify-end">
                    <div className="flex gap-x-2 sm:gap-x-8 items-center"> 
                    <p className="dark:text-white">Hello Demo User</p>
                    <button className="btn btn-xs btn-outline btn-primary"></button>
                    </div>
                </div>
            </header>
            
        </div>
    )
}