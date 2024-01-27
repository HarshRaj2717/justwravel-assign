"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export default function Modal({ children, loading = false }) {
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
        <div className="modal-action">
          <button
            onClick={onDismiss}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ⨯
          </button>
        </div>
        {children}
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
}
