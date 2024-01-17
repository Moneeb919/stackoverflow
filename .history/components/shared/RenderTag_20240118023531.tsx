import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface RenderTagProps {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({
  _id,
  name,
  totalQuestions,
  showCount,
}: RenderTagProps) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge>{name}</Badge>
    </Link>
  );
};

export default RenderTag;
