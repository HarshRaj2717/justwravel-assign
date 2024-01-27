"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export default function Modal({ id, title, category, loading = false }) {
  const router = useRouter();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog ref={dialogRef} onClose={onDismiss} className="modal">
      <div className={"modal-box" + (loading ? " animate-pulse" : "")}>
        <p className="!italic font-light">ID: {id}</p>
        <p className="font-bold text-2xl">{title}</p>
        <p className="!italic font-light py-1">Category: {category}</p>
        <div className="modal-action">
          <button
            onClick={onDismiss}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ⨯
          </button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
}
