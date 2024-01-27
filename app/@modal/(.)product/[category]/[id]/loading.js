"use client";
import { LoadingDetailPage } from "@/app/components/DetailPage";
import Modal from "./Modal";

export default function Product({ params }) {
  return (
    <Modal loading={true}>
      <LoadingDetailPage />
    </Modal>
  );
}
