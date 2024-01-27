import { fetchSingleProduct } from "@/app/apis";
import DetailPage from "@/app/components/DetailPage";
import Modal from "./Modal";

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
    <Modal id={product.id} title={product.title} category={product.category} />
  );
}