

export default function Card({src,productname,productprice}){
    return(
        <div>
            

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
    <a href="#">
        <img className="rounded-xl h-64 md:h-48 w-full object-cover" src={src} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">{productname}</h5>
        </a>
        <p className="mb-3 font-normal text-black dark:text-gray-400">{productprice}</p>
        
    </div>
</div>

        </div>
    )
}