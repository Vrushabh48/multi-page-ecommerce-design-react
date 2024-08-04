
export default function Button({title}){
    return(
        <div className="p-2">
            <button className="rounded p-2 bg-blue-600 text-white hover:bg-blue-500">{title}</button>
        </div>
    )
}