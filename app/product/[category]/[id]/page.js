"use client";
import { useEffect, useState } from "react";
import { fetchSingleProduct } from "@/app/apis";
import DetailPage, { LoadingDetailPage } from "@/app/components/DetailPage";
import Link from "next/link";

export const cache = "no-store";

const getProduct = async (id) => {
  try {
    const data = await fetchSingleProduct(id);
    return data;
  } catch (error) {
    // Return null if there's an error (404 or otherwise)
    return null;
  }
};

export default function Product({ params }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProduct(params.id);
      setProduct(data);
    }
    fetchData();
  }, [params.id]);

  // Display loading page while product is being fetched
  if (!product) {
    return (
      <main className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:my-10">
          <div className="bg-base-100 shadow-lg rounded-xl animate-pulse">
            <LoadingDetailPage />
          </div>
          <Link href={"/"} className="btn btn-outline">
            Go Back Home
          </Link>
        </div>
      </main>
    );
  }

  // Display product details once fetched
  return (
    <main className="hero min-h-screen bg-base-300">
      <div className="hero-content flex-col lg:my-10">
        <div className="bg-base-100 shadow-lg rounded-xl">
          <DetailPage {...product} />
        </div>
        <Link href={"/"} className="btn btn-outline">
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
