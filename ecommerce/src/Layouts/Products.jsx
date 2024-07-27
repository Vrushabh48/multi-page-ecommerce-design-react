import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

export default function Products() {
  return (
    <>
      <TopBar />
      <Navbar />
      <h1 className="text-5xl font-semibold text-center">Products</h1>
      <div className="pl-20 pr-20 grid grid-cols-3">
        <Card
          title="Lamp"
          price="$150"
          src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <Card
          title="Toy Car"
          price="$299"
          src="https://5.imimg.com/data5/SELLER/Default/2023/3/XX/GZ/MR/185278198/plastic-range-rover-toy-car.jpg"
        />
        <Card
          title="Wood Chair"
          price="$189.99"
          src="https://woodsala.com/cdn/shop/files/Z7A9243.jpg?v=1689680042"
        />
        <Card
          title="Bottle"
          price="$49"
          src="https://myborosil.com/cdn/shop/files/my-borosil-stainless-steel-bottles-trek-black-personalise-32329717710986.gif?v=1717398407"
        />
        <Card
          title="KeyBoard"
          price="$99"
          src="https://images-cdn.ubuy.co.in/633b72e4e0c36838310a04c2-havit-mechanical-keyboard-wired-compact.jpg"
        />
        <Card
          title="Mouse"
          price="$79"
          src="https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m190-wireless-mouse/m190-wireless-mouse-blue-gallery-01.png?v=1"
        />
        <Card
          title="Table"
          price="$599"
          src="https://www.zorin.co.in/cdn/shop/products/ZRNOSTWega6036Walnut_5.jpg?v=1684674518"
        />
        <Card
          title="Oil"
          price="$20"
          src="https://m.media-amazon.com/images/I/61Jb7TOqaeL.jpg"
        />
        <Card
          title="Sofa"
          price="$599"
          src="https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5934_green.jpg"
        />
      </div>
      <Footer />
    </>
  );
}
