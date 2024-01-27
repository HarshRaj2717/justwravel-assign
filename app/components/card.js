import Image from "next/image";
import Link from "next/link";

export function Rating({ value }) {
  function Star({ index }) {
    return (
      <svg
        className={
          "w-4 h-4" +
          " " +
          (value > index
            ? "text-yellow-300 ms-1"
            : "ms-1 text-gray-300 dark:text-gray-500")
        }
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  }

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star key={index} index={index} />
      ))}
    </div>
  );
}

export default function Card({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  return (
    <div className="card h-full bg-base-100 shadow-xl">
      <div className="h-96 p-4">
        <Image
          className="h-full w-auto mx-auto"
          src={image}
          width={500}
          height={500}
          alt={"Product Image"}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-2">{description}</p>
        <div className="flex">
          <div className="card-actions flex-1 flex-col pt-3">
            <div className="flex">
              <Rating value={Math.round(rating.rate)} />
              <div className="font-medium text-blue-gray-500 p-1">
                {rating.count}
              </div>
            </div>
            <div className="badge badge-outline p-2">{category}</div>
          </div>
          <div className="card-actions pt-5">
            <Link
              href={`/product/${category}/${id}`}
              className="btn btn-primary"
            >
              Buy for $ {price}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LoadingCard() {
  return (
    <div className="card h-full bg-base-100 shadow-xl animate-pulse">
      <div className="h-96 p-4">
        <Image
          src={"/product.png"}
          className="h-full w-auto mx-auto"
          width={500}
          height={500}
          alt={""}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">...</h2>
        <p className="line-clamp-2">...</p>
        <div className="flex">
          <div className="card-actions flex-1 flex-col pt-3">
            <div className="flex">
              <Rating value={0} />
              <div className="font-medium text-blue-gray-500 p-1"></div>
            </div>
            <div className="badge badge-outline p-2">---</div>
          </div>
          <div className="card-actions pt-5">
            <button className="btn btn-primary">Buy for $ ---</button>
          </div>
        </div>
      </div>
    </div>
  );
}
