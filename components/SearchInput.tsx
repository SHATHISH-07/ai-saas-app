"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("topic") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const newUrl = new URL(window.location.href);
      if (searchQuery) {
        newUrl.searchParams.set("topic", searchQuery);
      } else {
        newUrl.searchParams.delete("topic");
      }
      router.push(`${newUrl.pathname}?${newUrl.searchParams.toString()}`);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router]);

  return (
    <div className="relative border border-black rounded-full items-center flex gap-2 px-2 py-2 h-fit">
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />
      <input
        placeholder="Search Companions..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
