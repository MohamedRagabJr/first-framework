export default function ProductCard({ product, del }) {
  return (
    <div className="card bg-base-100 w-full shadow-sm bg-white">
      <figure>
        <img src={product.imageCover} alt={product.title} className="w-full h-[250px] object-contain" />
      </figure>

      <div className="card-body bg-white">
        <h2 className="card-title primary-color truncate">{product.title}</h2>

        <p className="secondary-color text-start truncate ">{product.description}</p>

        <p className="bg-secondary w-max px-4 py-1 rounded-lg shadow-lg text-white">
          {product.price} L.E
        </p>

        <div className="card-actions justify-end">
          <button className="btn bg-main border-none focus:outline-none">
            Buy Now
          </button>

          <button
            onClick={() => del(product.id)}
            className="btn-error text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
