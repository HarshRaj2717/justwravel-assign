import Image from "next/image";
import { Rating } from "./card";

export default function DetailPage({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  return (
    <div className="card bg-base-100 p-2">
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
        <p className="italic font-light">ID: {id}</p>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-col lg:flex-row">
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
            <button className="btn btn-primary">Buy for $ {price}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LoadingDetailPage() {
  return (
    <div className="card bg-base-100 p-2">
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
        <p className="italic font-light">ID: ##</p>
        <h2 className="card-title">...</h2>
        <p>...</p>
        <div className="flex flex-col lg:flex-row">
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
