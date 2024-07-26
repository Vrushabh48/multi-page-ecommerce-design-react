import Card from "./Card"

export default function Section1(){
    return(
        <div>
        <div className="pr-40 pl-40 pt-32 flex">
            <div className="items-center pr-32">
                <div className="p-3 pr-5">
                <h1 className="font-extrabold text-6xl p-3 pr-6 space-x-1 ">We are changing the way people shop</h1>
                </div>
                <div className="p-3 font-semibold">
                <p className="space-x-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
                </div>
                <div className="p-3">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Our Products</button>
                </div>
            </div>
            <div className="p-3">
            <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" className="rounded size-96" alt="..."/>
            </div>
        </div>
        <div className="pl-40 pr-40">
            <div>
                <h1 className="text-4xl font-extralight">Featured Products</h1>
            </div>
            <div className="flex gap-3 pl-52">
                <Card title="Avant-Garde Lamp" price="$179.99" src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1260&g=750"/>
                <Card title="Coffee Table" price="$199.99" src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                <Card title="Comfy Bed" price="$299" src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
            </div>

        </div>
        </div>
    )
}