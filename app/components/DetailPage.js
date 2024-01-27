import Image from "next/image";

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
      <figure>
        <Image src={image} width={500} height={500} alt={"Product Image"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-col lg:flex-row">
          <div className="card-actions flex-1 flex-col pt-3">
            <div className="flex">
              <div className="font-medium text-blue-gray-500 p-1">
                🌟 {rating.rate} | {rating.count}
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
