"use client";
import { fetchSingleProduct } from "@/app/apis";
import Image from "next/image";
import { Rating } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function Product({ params }) {
  const [product, setProduct] = useState({});

  // Fetch data when the component mounts
  useEffect(() => {
    async function fetchData() {
      const data = await fetchSingleProduct(params.id);
      if (data) {
        setProduct(data);
      }
      console.log(product);
    }
    fetchData();
  }, [null]);

  return (
    <main>
      {Object.keys(product).length !== 0 && (
        <div className="card lg:card-side h-auto m-4 bg-base-100 shadow-xl">
          <figure>
            <Image
              src={product.image}
              width={500}
              height={500}
              alt={"Product Image"}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="flex">
              <div className="card-actions flex-1 flex-col pt-3">
                <div className="flex">
                  <Rating value={Math.round(product.rating.rate)} readonly />
                  <div className="font-medium text-blue-gray-500 p-1">
                    {product.rating.count}
                  </div>
                </div>
                <div className="badge badge-outline p-2">
                  {product.category}
                </div>
              </div>
              <div className="card-actions pt-5">
                <button className="btn btn-primary">
                  Buy for $ {product.price}
                </button>
                <button className="btn btn-outline">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
