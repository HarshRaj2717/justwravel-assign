"use client";

import { LoadingDetailPage } from "@/app/components/DetailPage";
import Link from "next/link";

export default function LoadingPage() {
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
