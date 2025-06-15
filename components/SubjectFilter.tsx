"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
    const url = new URL(window.location.href);
    url.searchParams.set("subject", subject);
    if (subject === "all subjects") url.searchParams.delete("subject");
    router.push(`${url.pathname}?${url.searchParams.toString()}`);
  };

  return (
    <Select
      onValueChange={handleSubjectChange}
      value={selectedSubject}
      defaultValue={searchParams.get("subject") || ""}
    >
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject}>
            {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
