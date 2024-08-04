import Button from "./Button";
import Carousel from "./Carousel";
import Featured from "./Featured";

export default function Content(){
    return (
        <div>
            <div className="grid grid-cols-1 p-10 gap-10 lg:grid-cols-2">
                <div className="p-6 gap-8">
                    <h1 className="text-7xl p-4 font-bold">We are Changing the way People Shop</h1>
                    <p className="text-lg p-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Laboriosam, maxime, quia, dolores aspernatur tempore nulla 
                        perferendis eius quisquam facere atque eveniet at quasi eligendi? Ad ex quos dolorum saepe eligendi.
                    </p>
                    <div>
                        <Button title="Our Products"/>
                    </div>
                </div>
                <div className="items-center pt-40">
                    <Carousel />
                </div>
            </div>
            <div className="p-9">
                <Featured />
            </div>
        </div>
    )
}