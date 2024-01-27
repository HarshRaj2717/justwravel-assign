import Image from "next/image";
import { Rating } from "@material-tailwind/react";

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
    <div className="card w-80 h-auto m-4 lg:w-96 lg:h-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={image} width={500} height={500} alt={"Product Image"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-2">{description}</p>
        <div className="flex">
          <div className="card-actions flex-1 flex-col pt-3">
            <div className="flex">
              <Rating value={Math.round(rating.rate)} readonly />
              <div className="font-medium text-blue-gray-500 p-1">
                {rating.count}
              </div>
            </div>
            <div className="badge badge-outline p-2">{category}</div>
          </div>
          <div className="card-actions pt-5">
            <button className="btn btn-primary">$ {price}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
