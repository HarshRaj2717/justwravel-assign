import { fetchSingleProduct } from "@/app/apis";
import Modal from "./Modal";
import DetailPage from "@/app/components/DetailPage";

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
    <Modal>
      <DetailPage {...product} />
    </Modal>
  );
}
