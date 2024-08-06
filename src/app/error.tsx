"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("error here", error);
  }, [error]);

  return (
    <div className="flex items-center gap-8 flex-col justify-center size-full">
      <h2>Something went wrong!</h2>
      {error.message}
      <button
        className="bg-red-500 px-4 py-2 rounded-lg text-base"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
