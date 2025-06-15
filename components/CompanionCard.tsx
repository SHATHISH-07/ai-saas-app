"use client";

import { addBookMark, removeBookMark } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useState } from "react";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
  userId: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
  userId,
}: CompanionCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(userId ? bookmarked : false);

  const pathname = usePathname();

  const handleBookmark = async () => {
    if (!userId) {
      return redirect("/sign-in");
    }

    const newState = !isBookmarked;
    setIsBookmarked(newState);

    try {
      if (newState) {
        await addBookMark(id, pathname);
      } else {
        await removeBookMark(id, pathname);
      }
    } catch (error) {
      console.error("Bookmark error:", error);
    }
  };

  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark" onClick={handleBookmark}>
          <Image
            src={`/icons/${
              isBookmarked && userId ? "bookmark-filled" : "bookmark"
            }.svg`}
            alt="bookmark"
            width={12}
            height={14}
          />
        </button>
      </div>
      <h2 className=" text-xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="clock" width={13} height={13} />
        <p className="text-sm">{duration} mins duration</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
