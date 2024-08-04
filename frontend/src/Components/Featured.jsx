import Card from "./Card";
export default function Featured(){
    const products = [
        { src: 'https://via.placeholder.com/150', productName: 'Product 1', productPrice: 29.99 },
        { src: 'https://via.placeholder.com/150', productName: 'Product 2', productPrice: 19.99 },
        { src: 'https://via.placeholder.com/150', productName: 'Product 3', productPrice: 39.99 },
      ];

    return (
        <div className="grid grid-cols-1 gap-10 pl-9 pr-9">
            <div className="p-4">
                <h1 className="pb-3 text-2xl font-semibold">Featured Products</h1>
                <hr className="pt-3" />
            </div>
            <div className="grid grid-cols-3 gap-4 pl-9 pr-9">
      {products.map((product, index) => (
        <Card key={index} src={product.src} productname={product.productName} productprice={product.productPrice}/>
      ))}
    </div>
        </div>
    )
}