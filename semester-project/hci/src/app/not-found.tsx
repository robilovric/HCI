import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Relax,</h1>
          <h1 className="text-4xl font-bold">
            We&#39;ll redirect you right away!
          </h1>
        </div>
        <p className="text-gray-600">
          It looks like you are trying to access a page that either has been
          deleted or never existed.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-black text-white rounded transition-all hover:bg-gray-600"
        >
          Back to home
        </Link>
      </div>

      <div className="ml-8">
        <Image
          src="/images/404handling.png"
          alt="404 Image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
