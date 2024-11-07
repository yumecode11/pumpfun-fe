"use client";

import { FC } from "react";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/primitives/Button";

const BackBtn: FC = () => {
  const { back } = useRouter();

  return (
    <Button variant="outline" className="my-4" onClick={back}>
      <ArrowLeft className="h-4 w-4 mr-2" />
      Back
    </Button>
  );
};

export default BackBtn;
