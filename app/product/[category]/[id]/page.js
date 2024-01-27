import { fetchSingleProduct } from "@/app/apis";
import DetailPage from "@/app/components/DetailPage";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

export const cache = "no-store";

const getProduct = async (id) => {
  try {
    const data = await fetchSingleProduct(id);
    return data;
  } catch (error) {
    return error;
  }
};

export default async function Product({ params }) {
  // Fetch data when the component mounts
  const product = await getProduct(params.id);

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
