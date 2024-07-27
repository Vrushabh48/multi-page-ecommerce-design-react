export default function Card({ title, price, src }) {
    return (
      <div className="p-6">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-lg w-full h-48 object-cover"
              src={src}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-black">
              {price}
            </p>
          </div>
        </div>
      </div>
    );
  }
  